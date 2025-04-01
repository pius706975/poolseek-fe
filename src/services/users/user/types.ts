export type TSendOTP = {
    email: string;
};

export type SendOTPResponse = {
    message: string;
};

export type TVerifyOTP = {
    email: string
    otp_code: string
}

export type VerifyOTPResponse = {
    message: string
}