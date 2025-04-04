'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    HomeIcon,
    GlobeIcon,
    CollectionIcon,
    BriefcaseIcon,
    AwardIcon,
    PlusIcon,
} from '@/assets/svg/icons';
import PoolSeekLogo from '@/assets/svg/brand/brandLogo';

export default function UnderDevelopmentPage() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Set launch date to 30 days from now
    useEffect(() => {
        const launchDate = new Date();
        launchDate.setDate(launchDate.getDate() + 30);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = launchDate.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);

            if (difference <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would send this to your backend
        console.log('Email submitted:', email);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setEmail('');
    };

    // Features that will be available
    const features = [
        { name: 'Q&A Platform', icon: GlobeIcon, progress: 65 },
        { name: 'Knowledge Collections', icon: CollectionIcon, progress: 40 },
        { name: 'Job Board', icon: BriefcaseIcon, progress: 25 },
        { name: 'Tag System', icon: AwardIcon, progress: 80 },
        { name: 'Ask Questions', icon: PlusIcon, progress: 50 },
    ];

    // Social media links
    // const socialLinks = [
    //     { name: 'GitHub', icon: GithubIcon, href: '#' },
    //     { name: 'Twitter', icon: TwitterIcon, href: '#' },
    //     { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
    //     { name: 'Instagram', icon: InstagramIcon, href: '#' },
    // ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
                    <div className="flex items-center">
                        <div className="flex h-8 w-8 items-center justify-center">
                            <PoolSeekLogo width={50} height={50} />
                        </div>
                        <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                            PoolSeek
                        </span>
                    </div>
                    <Link
                        href="/"
                        className="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
                        <HomeIcon className="mr-2" />
                        <span>Home</span>
                    </Link>
                </div>
            </header>

            {/* Main content */}
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Illustration */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative h-64 w-64">
                            {/* Animated circles */}
                            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#4169E1]/20 animate-[ping_3s_ease-in-out_infinite]"></div>
                            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#4169E1]/40 animate-[ping_3s_ease-in-out_1s_infinite]"></div>

                            {/* Central icon */}
                            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#4169E1] text-white shadow-lg">
                                <div className="text-3xl font-bold">PS</div>
                            </div>

                            {/* Floating icons */}
                            <div className="absolute left-0 top-1/4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md dark:bg-gray-800 animate-[bounce_6s_ease-in-out_infinite]">
                                <GlobeIcon className="text-[#4169E1]" />
                            </div>
                            <div className="absolute right-0 top-2/3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md dark:bg-gray-800 animate-[bounce_5s_ease-in-out_0.5s_infinite]">
                                <CollectionIcon className="text-[#4169E1]" />
                            </div>
                            <div className="absolute bottom-0 left-1/4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md dark:bg-gray-800 animate-[bounce_4s_ease-in-out_1s_infinite]">
                                <AwardIcon className="text-[#4169E1]" />
                            </div>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                        {`We're`}{' '}
                        <span className="text-[#4169E1]">Building</span>{' '}
                        Something Amazing
                    </h1>

                    {/* Subheading */}
                    <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
                        {`Our Q&A platform is under development. We're working
                        hard to bring you the best experience possible.`}
                    </p>

                    {/* Countdown timer */}
                    {/* <div className="mb-12">
                        <p className="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">
                            Estimated Launch In:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex min-w-[80px] flex-col rounded-lg bg-white p-3 shadow-md dark:bg-gray-800">
                                <span className="text-2xl font-bold text-[#4169E1]">
                                    {days}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Days
                                </span>
                            </div>
                            <div className="flex min-w-[80px] flex-col rounded-lg bg-white p-3 shadow-md dark:bg-gray-800">
                                <span className="text-2xl font-bold text-[#4169E1]">
                                    {hours}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Hours
                                </span>
                            </div>
                            <div className="flex min-w-[80px] flex-col rounded-lg bg-white p-3 shadow-md dark:bg-gray-800">
                                <span className="text-2xl font-bold text-[#4169E1]">
                                    {minutes}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Minutes
                                </span>
                            </div>
                            <div className="flex min-w-[80px] flex-col rounded-lg bg-white p-3 shadow-md dark:bg-gray-800">
                                <span className="text-2xl font-bold text-[#4169E1]">
                                    {seconds}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Seconds
                                </span>
                            </div>
                        </div>
                    </div> */}

                    {/* Features progress */}
                    {/* <div className="mb-12">
                        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                            Development Progress
                        </h2>
                        <div className="space-y-4">
                            {features.map(feature => (
                                <div
                                    key={feature.name}
                                    className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
                                    <div className="mb-2 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <feature.icon className="mr-2 text-[#4169E1]" />
                                            <span className="font-medium text-gray-800 dark:text-gray-200">
                                                {feature.name}
                                            </span>
                                        </div>
                                        <span className="text-sm font-medium text-[#4169E1]">
                                            {feature.progress}%
                                        </span>
                                    </div>
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                                        <div
                                            className="h-full rounded-full bg-[#4169E1] transition-all duration-1000 ease-in-out"
                                            style={{
                                                width: `${feature.progress}%`,
                                            }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Email subscription */}
                    {/* <div className="mx-auto mb-12 max-w-md">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                            Get Notified When We Launch
                        </h2>
                        <p className="mb-6 text-gray-600 dark:text-gray-300">
                            Subscribe to our newsletter and be the first to know
                            when we go live.
                        </p>
                        <form onSubmit={handleSubmit} className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-24 text-gray-800 focus:border-[#4169E1] focus:outline-none focus:ring-2 focus:ring-[#4169E1]/50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 rounded-md bg-[#4169E1] px-4 py-1 text-sm font-medium text-white hover:bg-[#3a5ecc] focus:outline-none focus:ring-2 focus:ring-[#4169E1]/50 focus:ring-offset-2">
                                Notify Me
                            </button>
                        </form>
                        {isSubmitted && (
                            <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                                Thank you! We'll notify you when we launch.
                            </p>
                        )}
                    </div> */}
                </div>
            </main>
        </div>
    );
}
