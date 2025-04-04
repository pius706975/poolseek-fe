'use client';
import React, { useEffect, useState } from 'react';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { GoogleIcon } from '@/components/icons/google';
import Link from 'next/link';
import validateSignIn from './validator';
import PoolSeekLogo from '@/assets/svg/brand/brandLogo';
import { useToast } from '@/components/toast/ToastProvider';
import { useSignIn } from '@/services/users/auth';
import { getDeviceInfo } from '@/utils/getDeviceInfo';
import { encryptData } from '@/utils/crypto';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [deviceInfo, setDeviceInfo] = useState({
        device_id: '',
        device_name: '',
        device_model: '',
    });

    const { addToast } = useToast();
    const router = useRouter()
    const signInMutation = useSignIn();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDeviceInfo(getDeviceInfo());
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        validateSignIn(email, password, message => {
            addToast('error', message);
            return;
        });

        signInMutation.mutate(
            {
                email,
                password,
                device_id: deviceInfo.device_id,
                device_model: deviceInfo.device_model,
                device_name: deviceInfo.device_name,
            },
            {
                onSuccess: res => {
                    const response = res.data.data;
                    console.log(response.refresh_token);

                    if (
                        res.data.message === 'Successfully signed in' ||
                        res.status === 200
                    ) {
                        addToast('success', res.data.message);

                        localStorage.setItem(
                            'access_token',
                            encryptData(response.access_token),
                        );
                        localStorage.setItem(
                            'refresh_token',
                            encryptData(response.refresh_token),
                        );
                        localStorage.setItem(
                            'user_id',
                            encryptData(response.user.id),
                        );

                        router.push('/')
                    }
                },
                onError: error => {
                    if (
                        error.response?.status === 401 ||
                        // @ts-ignore
                        error.response?.data.error ===
                            'Email or password is invalid'
                    ) {
                        addToast('error', 'Email or password is invalid');
                    }
                },
            },
        );
    };

    return (
        <div className="min-h-screen">
            <div className="w-full lg:w-full flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <div className="flex items-center justify-center">
                        <PoolSeekLogo
                            width={300}
                            height={300}
                            showText={true}
                        />
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <Input
                            type="text"
                            placeholder="Email"
                            value={email}
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                        />

                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            label="Password"
                            onChange={e => setPassword(e.target.value)}
                        />

                        <p className="text-right text-[#4169E1] hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer dark:active:text-gray-100 active:text-gray-900">
                            <Link href="/forgot-password">
                                Forgot password?
                            </Link>
                        </p>

                        <Button type="submit">
                            {signInMutation.isPending
                                ? 'Signing In...'
                                : 'Sign In'}
                        </Button>
                    </form>

                    <div className="text-center mt-4 dark:text-gray-300 text-gray-500">
                        OR
                    </div>

                    <div className="mt-4 space-y-2">
                        <Button
                            className="border-2 border-[#3656B3] hover:border-[#4169E1]"
                            onClick={() => {}}>
                            <div className="flex justify-center">
                                <GoogleIcon />{' '}
                                <span className="ml-2">
                                    Sign in with Google
                                </span>
                            </div>
                        </Button>

                        {/* <Button
                            className="border-2 hover:border-purple-700"
                            onClick={() => {}}>
                            <div className="flex justify-center">
                                <FacebookIcon />{' '}
                                <span className="ml-2">
                                    Sign in with Facebook
                                </span>
                            </div>
                        </Button> */}
                    </div>

                    <p className="text-center mt-4 text-sm dark:text-gray-300 text-gray-600">
                        {`Don't have an account?`}{' '}
                        <Link
                            href="/sign-up"
                            className="text-blue-500 dark:hover:text-blue-100 hover:text-black">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
