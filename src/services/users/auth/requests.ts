import { AxiosResponse } from 'axios';
import { SignInResponse, TSignUp } from './types';
import axiosInstance from '@/contexts/auth/AxiosInstance';

export const signUp = async (
    req: TSignUp,
): Promise<AxiosResponse<SignInResponse>> => {
    return await axiosInstance.post('/auth/signup', req);
};
