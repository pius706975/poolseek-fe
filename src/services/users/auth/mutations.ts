import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
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
import {
    forgotPassword,
    refreshToken,
    signIn,
    signOut,
    signUp,
} from './requests';

export const useSignUp = () =>
    useMutation<AxiosResponse<SignUpResponse>, AxiosError, TSignUp>({
        mutationFn: async (
            data: TSignUp,
        ): Promise<AxiosResponse<SignUpResponse>> => await signUp(data),
    });

export const useSignIn = () =>
    useMutation<AxiosResponse<SignInResponse>, AxiosError, TSignIn>({
        mutationFn: async (
            data: TSignIn,
        ): Promise<AxiosResponse<SignInResponse>> => await signIn(data),
    });

export const useForgotPassword = () =>
    useMutation<
        AxiosResponse<ResetPasswordResponse>,
        AxiosError,
        TResetPassword
    >({
        mutationFn: async (
            data: TResetPassword,
        ): Promise<AxiosResponse<ResetPasswordResponse>> =>
            await forgotPassword(data),
    });

export const useRefreshToken = () =>
    useMutation<AxiosResponse<RefreshTokenResponse>, AxiosError, TRefreshToken>(
        {
            mutationFn: async (
                data: TRefreshToken,
            ): Promise<AxiosResponse<RefreshTokenResponse>> =>
                await refreshToken(data),
        },
    );

export const useSignOut = () =>
    useMutation<AxiosResponse<SignOutResponse>, AxiosError, TSignOut>({
        mutationFn: async (
            data: TSignOut,
        ): Promise<AxiosResponse<SignOutResponse>> => await signOut(data),
    });
