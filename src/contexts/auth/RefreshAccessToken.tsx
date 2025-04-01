import { AxiosResponse } from 'axios';
import axiosInstance from './AxiosInstance';
import { RefreshTokenResponse } from './types';

const refreshAccessToken = (
    refreshToken: string,
): Promise<RefreshTokenResponse> => {
    return axiosInstance({
        method: 'POST',
        url: '/auth/refresh-token',
        data: { refreshToken },
    })
        .then((res: AxiosResponse<RefreshTokenResponse>) => {
            return res.data;
        })
        .catch((error: Error) => {
            throw error;
        });
};

export default refreshAccessToken;
