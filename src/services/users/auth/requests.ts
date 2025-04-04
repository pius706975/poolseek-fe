import { AxiosResponse } from 'axios';
import {
    RefreshTokenResponse,
    ResetPasswordResponse,
    SignInResponse,
    SignOutResponse,
    SignUpResponse,
    TRefreshToken,
    TResetPassword,
    TSignIn,
    TSignOut,
    TSignUp,
} from './types';
import axiosInstance from '@/contexts/AxiosInstance';

export const signUp = async (
    req: TSignUp,
): Promise<AxiosResponse<SignUpResponse>> => {
    return await axiosInstance.post('/auth/signup', req);
};

export const signIn = async (
    req: TSignIn,
): Promise<AxiosResponse<SignInResponse>> => {
    return await axiosInstance.post('/auth/signin', req);
};

export const forgotPassword = async (
    req: TResetPassword,
): Promise<AxiosResponse<ResetPasswordResponse>> => {
    return await axiosInstance.put('/auth/reset-password', req);
};

export const refreshToken = async (
    req: TRefreshToken,
): Promise<AxiosResponse<RefreshTokenResponse>> => {
    return await axiosInstance.post('/auth/refresh-token', req);
};

export const signOut = async (
    req: TSignOut,
): Promise<AxiosResponse<SignOutResponse>> => {
    return await axiosInstance.post('/auth/signout', req);
};