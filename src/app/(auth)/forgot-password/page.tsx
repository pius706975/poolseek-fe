'use client';
import { useState } from 'react';
import OTPFotgotPassword from './components/otpForm';

const ForgotPasswordPage = () => {
    const [isVerifying, setIsVerifying] = useState<boolean>(false);
    const handleResendOTP = () => {};
    const handleVefiryOTP = () => {};

    return (
        <div className="min-h-screen flex items-center justify-center p-8">
            <div className="w-full max-w-md">
                <OTPFotgotPassword
                    onResendOTP={handleResendOTP}
                    onVerifyOTP={handleVefiryOTP}
                    isVerifying={isVerifying}
                />
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
