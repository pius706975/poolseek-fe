'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@/components/toast/ToastProvider';
import { useSendOTP, useVerifyOTP } from '@/services/users/user';
import {
    clearEmailForVerification,
    clearOTPVerified,
    setEmailForVerification,
    setOTPVerified,
} from '@/store/authSlice';
import OTPForgotPassword from './components/otpForm';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import validateForgotPassword from './validator';
import { useForgotPassword } from '@/services/users/auth';

const ForgotPasswordPage = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { addToast } = useToast();
    const dispatch = useDispatch();

    const router = useRouter();
    const sendOTPMutation = useSendOTP();
    const verifyOTPMutation = useVerifyOTP();
    const resetPasswordMutation = useForgotPassword();

    const emailForgotPassword = useSelector(
        (state: RootState) => state.auth.emailForVerification,
    );
    const otpVerificationStatus = useSelector(
        (state: RootState) => state.auth.isOTPVerified,
    );

    useEffect(() => {
        if (otpVerificationStatus) {
            setActiveStep(2);
        }
    }, [otpVerificationStatus]);

    // Deactive this one by commenting it if this page is underdevelopment
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(clearEmailForVerification());
            dispatch(clearOTPVerified());
            addToast('info', 'Your session has expired due to inactivity.');
            router.push('/sign-in')
        }, 60 * 60 * 1000);

        return () => clearTimeout(timer);
    }, [email, dispatch, addToast]);

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

    const handleVerifyOTP = (otp: string) => {
        if (!email) return;

        verifyOTPMutation.mutate(
            { email, otp_code: otp },
            {
                onSuccess: res => {
                    const response = res.data;
                    if (
                        response.message === 'OTP Verified Successfully' ||
                        res.status === 200
                    ) {
                        addToast('success', 'You are verified');
                        dispatch(setOTPVerified(true));
                    }
                },
                onError: error => {
                    const errorResponse = error.response;
                    if (errorResponse?.status === 400) {
                        //@ts-ignore
                        if (errorResponse.data.error === 'Invalid OTP code') {
                            addToast('error', 'Invalid OTP code');
                        } else if (
                            //@ts-ignore
                            errorResponse.data.error === 'OTP code has expired'
                        ) {
                            addToast('error', 'OTP code has expired');
                        }
                    }
                },
            },
        );
    };

    const handleSubmitNewPassword = (e: React.FormEvent) => {
        e.preventDefault();
        
        validateForgotPassword(password, confirmPassword, message =>
            addToast('error', message),
        );

        resetPasswordMutation.mutate(
            { email: emailForgotPassword, password: password },
            {
                onSuccess: res => {
                    const response = res.data;
                    if (
                        response.message === 'Password reset successfully' ||
                        res.status === 200
                    ) {
                        addToast('success', response.message);
                        router.push('/sign-in');

                        setTimeout(() => {
                            dispatch(clearEmailForVerification());
                            dispatch(clearOTPVerified());
                        }, 60000);
                    }
                },
            },
        );
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="flex space-x-4 mb-6">
                <div
                    className={`px-4 py-2 text-sm font-semibold border-b-2 flex items-center gap-2 ${
                        otpVerificationStatus || activeStep === 1
                            ? 'border-blue-600 text-blue-600'
                            : 'text-gray-400'
                    }`}>
                    Verification
                    {otpVerificationStatus && <CheckCircle />}
                </div>

                <div
                    className={`px-4 py-2 text-sm font-semibold border-b-2 ${
                        activeStep === 2
                            ? 'border-blue-600 text-blue-600'
                            : 'text-gray-400'
                    }`}>
                    Reset Password
                </div>
            </div>

            <div className="w-full max-w-md">
                {activeStep === 1 ? (
                    <OTPForgotPassword
                        email={email}
                        setEmail={setEmail}
                        onResendOTP={handleResendOTP}
                        onVerifyOTP={handleVerifyOTP}
                        isVerifying={verifyOTPMutation.isPending}
                    />
                ) : (
                    <form
                        onSubmit={handleSubmitNewPassword}
                        className="mt-6 space-y-4">
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            label="New Password"
                            onChange={e => setPassword(e.target.value)}
                        />

                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            label="Confirm New Password"
                            onChange={e => setConfirmPassword(e.target.value)}
                        />

                        <Button
                            disabled={!password || !confirmPassword}
                            type="submit"
                            className={
                                !password || !confirmPassword
                                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    : 'bg-[#4169E1] hover:bg-[#3656B3] active:bg-[#2C4499] text-white'
                            }>
                            {resetPasswordMutation.isPending
                                ? 'Submitting...'
                                : 'Submit'}
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
};

const CheckCircle = () => (
    <svg
        className="h-5 w-5 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

export default ForgotPasswordPage;
