import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import {
    SendOTPResponse,
    TSendOTP,
    TVerifyOTP,
    VerifyOTPResponse,
} from './types';
import { sendOTP, verifyOTP } from './requests';

export const useSendOTP = () =>
    useMutation<AxiosResponse<SendOTPResponse>, AxiosError, TSendOTP>({
        mutationFn: async (
            data: TSendOTP,
        ): Promise<AxiosResponse<SendOTPResponse>> => await sendOTP(data),
    });

export const useVerifyOTP = () =>
    useMutation<AxiosResponse<VerifyOTPResponse>, AxiosError, TVerifyOTP>({
        mutationFn: async (
            data: TVerifyOTP,
        ): Promise<AxiosResponse<VerifyOTPResponse>> => await verifyOTP(data),
    });
