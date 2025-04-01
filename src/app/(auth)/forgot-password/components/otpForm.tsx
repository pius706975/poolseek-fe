'use client';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import {
    useState,
    useRef,
    useEffect,
    type KeyboardEvent,
    type ClipboardEvent,
} from 'react';

const OTPFotgotPassword = ({
    onResendOTP,
    onVerifyOTP,
    isVerifying,
}: {
    onResendOTP: () => void;
    onVerifyOTP: (otp: string) => void;
    isVerifying: boolean;
}) => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const [countdown, setCountdown] = useState<number>(0);
    const [isCounting, setIsCounting] = useState<boolean>(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 6);
    }, []);

    useEffect(() => {
        const storedExpireTime = localStorage.getItem('otpExpireTime');
        if (storedExpireTime) {
            const remainingTime = Math.floor(
                (+storedExpireTime - Date.now()) / 1000,
            );
            if (remainingTime > 0) {
                setCountdown(remainingTime);
                setIsCounting(true);
            } else {
                localStorage.removeItem('otpExpireTime');
            }
        }
    }, []);

    useEffect(() => {
        if (countdown > 0) {
            setIsCounting(true);
            const timer = setInterval(() => {
                setCountdown(prev => {
                    if (prev === 1) {
                        setIsCounting(false);
                        localStorage.removeItem('otpExpireTime');
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [countdown]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
    ) => {
        const value = e.target.value;
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        e: KeyboardEvent<HTMLInputElement>,
        index: number,
    ) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
        if (e.key === 'ArrowLeft' && index > 0) {
            e.preventDefault();
            inputRefs.current[index - 1]?.focus();
        }
        if (e.key === 'ArrowRight' && index < 5) {
            e.preventDefault();
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain').trim();

        if (/^\d{6}$/.test(pastedData)) {
            const digits = pastedData.split('');
            setOtp(digits);
            inputRefs.current[5]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onVerifyOTP(otp.join(''));
    };

    const handleResend = () => {
        onResendOTP();
        const newExpireTime = Date.now() + 60000;
        localStorage.setItem('otpExpireTime', newExpireTime.toString());
        setCountdown(60);
        setIsCounting(true);
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 border border-gray-300 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-center">
                Verification Code
            </h2>

            <form className="mt-4 mb-6">
                <div className="mb-6">
                    <Input
                        type="text"
                        placeholder="Email"
                        value={email}
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <Button
                    type="button"
                    className={
                        isValidEmail(email)
                            ? 'bg-[#4169E1] hover:bg-[#3656B3] active:bg-[#2C4499] text-white'
                            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    }
                    disabled={!isValidEmail(email)}
                    onClick={handleResend}>
                    Send OTP
                </Button>
            </form>

            <p className="text-center text-gray-500 dark:text-gray-300">
                Enter the 6-digit code sent to your device
            </p>

            <form onSubmit={handleSubmit} className="mt-4">
                <div className="flex justify-center gap-2 sm:gap-3 mb-6">
                    {otp.map((digit, index) => (
                        <div key={index} className="w-12 h-14 sm:w-14 sm:h-16">
                            <input
                                //@ts-ignore
                                ref={el => (inputRefs.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={e => handleChange(e, index)}
                                onKeyDown={e => handleKeyDown(e, index)}
                                onPaste={index === 0 ? handlePaste : undefined}
                                className="w-full h-full text-center text-xl font-semibold rounded-md border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent
                           dark:bg-gray-800 dark:border-gray-700 dark:text-white
                           transition-all duration-200"
                                aria-label={`Digit ${
                                    index + 1
                                } of verification code`}
                                autoComplete={
                                    index === 0 ? 'one-time-code' : 'off'
                                }
                            />
                        </div>
                    ))}
                </div>

                <Button
                    type="submit"
                    className={
                        otp.includes('')
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : 'bg-[#4169E1] hover:bg-[#3656B3] active:bg-[#2C4499] text-white'
                    }
                    disabled={isVerifying || otp.includes('')}>
                    {isVerifying ? 'Verifying...' : 'Verify'}
                </Button>
            </form>
        </div>
    );
};

export default OTPFotgotPassword;
