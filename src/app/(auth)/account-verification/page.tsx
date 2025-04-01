'use client';
import OTPValidationForm from '@/components/form/otpForm';
import { useToast } from '@/components/toast/ToastProvider';
import { useSendOTP, useVerifyOTP } from '@/services/users/user';
import { clearEmailForVerification } from '@/store/authSlice';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const AccountVerificationPage = () => {
    const email = useSelector(
        (state: RootState) => state.auth.emailForVerification,
    );
    const router = useRouter();
    const sendOTPMutation = useSendOTP();
    const verifyOTPMutation = useVerifyOTP();
    const { addToast } = useToast();
    const dispatch = useDispatch();

    console.log('email :', email);

    if (email === null) {
        router.push('/sign-up');
    }

    const handleResendOTP = () => {
        if (!email)
            return addToast('error', 'Email not found, please sign up again.');

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
                    }
                },
                onError: error => {
                    console.error(error);
                },
            },
        );
    };

    const handleVerify = (otp: string) => {
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
                        addToast('success', 'Account is verified');
                        router.push('/sign-in');
                        
                        setTimeout(() => {
                            dispatch(clearEmailForVerification());
                        }, 20000);
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

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen">
                <OTPValidationForm
                    onResendOTP={handleResendOTP}
                    onVerifyOTP={handleVerify}
                    isVerifying={verifyOTPMutation.isPending}
                />
            </div>
        </div>
    );
};

export default AccountVerificationPage;
