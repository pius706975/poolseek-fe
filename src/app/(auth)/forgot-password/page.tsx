'use client';
import { useState } from 'react';
import OTPFotgotPassword from './components/otpForm';
import { useDispatch } from 'react-redux';
import { useToast } from '@/components/toast/ToastProvider';
import { useSendOTP } from '@/services/users/user';
import { setEmailForVerification } from '@/store/authSlice';

const ForgotPasswordPage = () => {
    const [isVerifying, setIsVerifying] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const { addToast } = useToast();
    const dispatch = useDispatch();
    const sendOTPMutation = useSendOTP();

    const handleResendOTP = () => {
        sendOTPMutation.mutate(
            { email },
            {
                onSuccess: res => {
                    const response = res.data;
                    if (
                        response.message === 'OTP sent successfully' ||
                        res.status === 200
                    ) {
                        addToast('success', response.message);
                        dispatch(setEmailForVerification(email));
                    }
                },
                onError: error => {
                    const errorResponse = error.response;
                    if (
                        error.response?.status === 404 ||
                        // @ts-ignore
                        errorResponse?.data.error === 'User not found'
                    ) {
                        addToast('error', 'Email not found');
                    }
                },
            },
        );
    };

    const handleVefiryOTP = () => {};

    return (
        <div className="min-h-screen flex items-center justify-center p-8">
            <div className="w-full max-w-md">
                <OTPFotgotPassword
                    email={email}
                    setEmail={setEmail}
                    onResendOTP={handleResendOTP}
                    onVerifyOTP={handleVefiryOTP}
                    isVerifying={isVerifying}
                />
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
