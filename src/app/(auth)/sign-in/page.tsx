'use client';
import React, { useEffect, useState } from 'react';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { GoogleIcon } from '@/components/icons/google';
import Link from 'next/link';
// import { ErrorToast } from '@/components/toast/Toast';
import validateSignIn from './validator';
import { useTheme } from 'next-themes';
import PoolSeekLogo from '@/assets/svg/brand/brandLogo';
import { useToast } from '@/components/toast/ToastProvider';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { addToast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        validateSignIn(email, password, message => addToast('error', message));
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

                        <Button onClick={() => {}}>Sign In</Button>
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
