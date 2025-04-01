import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { SignInResponse, TSignUp } from './types';
import { signUp } from './requests';

export const useSignUp = () =>
    useMutation<AxiosResponse<SignInResponse>, AxiosError, TSignUp>({
        mutationFn: async (
            data: TSignUp,
        ): Promise<AxiosResponse<SignInResponse>> => await signUp(data),
    });
