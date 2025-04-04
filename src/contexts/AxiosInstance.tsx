import { refreshToken } from '@/services/users/auth/requests';
import { TRefreshToken } from '@/services/users/auth/types';
import { decryptData, encryptData } from '@/utils/crypto';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const api = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance: AxiosInstance = axios.create({
    baseURL: api,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;

let isRefreshing = false;
let failedRequestsQueue: any[] = [];

const refreshAccessToken = async () => {
    const encryptedRefreshToken = localStorage.getItem('refresh_token');
    const refreshTokenData = encryptedRefreshToken
        ? decryptData(encryptedRefreshToken)
        : null;

    if (!refreshTokenData) {
        console.log('No refresh token, force logout');
        localStorage.clear();
        return;
    }

    try {
        const { data } = await refreshToken({
            user_id: decryptData(localStorage.getItem('user_id')!),
            device_id: decryptData(localStorage.getItem('device_id')!),
            refresh_token: refreshTokenData,
        } as TRefreshToken);

        const newAccessToken = data.data.access_token;
        localStorage.setItem('access_token', encryptData(newAccessToken));
        console.log('Access token refreshed');
    } catch (error) {
        console.log('Refresh token failed, force logout');
        localStorage.clear();
    }
};

setInterval(() => {
    if (!isRefreshing) {
        isRefreshing = true;
        refreshAccessToken().finally(() => {
            isRefreshing = false;
        });
    }
}, 14 * 60 * 1000 + 30 * 1000);

axiosInstance.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & {
            _retry?: boolean;
        };

        if (error.response?.status === 401 && !originalRequest?._retry) {
            const encryptedRefreshToken = localStorage.getItem('refresh_token');
            const refreshTokenData = encryptedRefreshToken
                ? decryptData(encryptedRefreshToken)
                : null;

            if (!refreshTokenData) {
                console.log('No refresh token, force logout');
                localStorage.clear();
                return Promise.reject(error);
            }

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedRequestsQueue.push({ resolve, reject });
                })
                    .then(token => {
                        if (originalRequest?.headers) {
                            originalRequest.headers[
                                'Authorization'
                            ] = `Bearer ${token}`;
                        }
                        return axiosInstance(originalRequest!);
                    })
                    .catch(err => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const { data } = await refreshToken({
                    user_id: decryptData(localStorage.getItem('user_id')!),
                    device_id: decryptData(localStorage.getItem('device_id')!),
                    refresh_token: decryptData(
                        localStorage.getItem('refresh_token')!,
                    ),
                } as TRefreshToken);

                const newAccessToken = data.data.access_token;
                localStorage.setItem(
                    'access_token',
                    encryptData(newAccessToken),
                );

                failedRequestsQueue.forEach(prom =>
                    prom.resolve(newAccessToken),
                );
                failedRequestsQueue = [];

                if (originalRequest?.headers) {
                    originalRequest.headers[
                        'Authorization'
                    ] = `Bearer ${newAccessToken}`;
                }

                return axiosInstance(originalRequest!);
            } catch (refreshError) {
                console.log('Refresh token failed, force logout');
                localStorage.clear();
                failedRequestsQueue.forEach(prom => prom.reject(refreshError));
                failedRequestsQueue = [];
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    },
);

axiosInstance.interceptors.request.use(
    config => {
        const encryptedAccessToken = localStorage.getItem('access_token');
        const token = encryptedAccessToken
            ? decryptData(encryptedAccessToken)
            : null;

        if (token && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error),
);
