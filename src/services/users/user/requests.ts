import { AxiosResponse } from "axios";
import { TSendOTP, TVerifyOTP, VerifyOTPResponse } from "./types";
import { SignInResponse } from "../auth/types";
import axiosInstance from "@/contexts/AxiosInstance";

export const sendOTP = async (
    req: TSendOTP,
): Promise<AxiosResponse<SignInResponse>> => {
    return await axiosInstance.put('/user/send-otp', req);
};

export const verifyOTP = async (
    req: TVerifyOTP,
): Promise<AxiosResponse<VerifyOTPResponse>> => {
    return await axiosInstance.put('/user/verify-otp', req);
};