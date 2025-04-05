'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    SearchIcon,
    MenuIcon,
    XIcon,
    BellIcon,
    UserIcon,
} from '@/assets/svg/icons';
import Sidebar from './Sidebar';
import MobileNavigation from './MobileNav';
import PoolSeekLogo from '@/assets/svg/brand/brandLogo';
import ThemeChanger from '@/components/DarkSwitcher';
import Button from '@/components/button/Button';
import { useAuth } from '@/contexts/useAuth';

export default function Navbar() {
    const { isAuthenticated } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <>
            {/* Top navbar */}
            <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="flex h-14 items-center px-4 sm:px-6">
                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="mr-2 rounded-md p-1.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 md:hidden"
                        aria-label="Toggle menu">
                        {isMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>

                    {/* Desktop sidebar toggle */}
                    <button
                        onClick={toggleSidebar}
                        className="mr-2 hidden rounded-md p-1.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 md:block"
                        aria-label="Toggle sidebar">
                        <MenuIcon />
                    </button>

                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="flex h-8 w-8 items-center justify-center">
                                <PoolSeekLogo width={50} height={50} />
                            </div>
                            <span className="ml-2 text-xl font-semibold text-[#4169E1] hidden lg:inline">
                                PoolSeek
                            </span>
                        </Link>
                    </div>

                    {/* Search */}
                    <div
                        className={
                            'relative flex flex-1 justify-center transition-all duration-300' +
                            (isSearchFocused
                                ? 'sm:max-w-[600px]'
                                : 'sm:max-w-[400px]')
                        }>
                        <div className="relative w-full max-w-[600px] flex items-center">
                            <SearchIcon className="absolute left-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search Globally..."
                                className="h-9 w-full rounded-md border border-gray-300 bg-white pl-10 pr-4 text-sm focus:border-[#4169E1] focus:outline-none focus:ring-1 focus:ring-[#4169E1] dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-[#4169E1]"
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                            />
                        </div>
                    </div>

                    {/* Right side icons */}
                    <div className="ml-auto flex items-center space-x-1">
                        <div className="pl-4">
                            <ThemeChanger className="rounded-full border-[#4169E1] dark:border-white" />
                        </div>

                        {/* Icons - Desktop */}
                        {isAuthenticated ? (
                            <div className="hidden md:flex md:items-center md:space-x-1">
                                <button
                                    className="rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                                    aria-label="Notifications">
                                    <BellIcon />
                                </button>
                                <button
                                    className="rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                                    aria-label="User profile">
                                    <div className="h-5 w-5 rounded-full bg-[#4169E1] text-white flex items-center justify-center">
                                        <UserIcon />
                                    </div>
                                </button>
                            </div>
                        ) : (
                            <div className="hidden sm:flex sm:items-center sm:space-x-2">
                                <Link href="/sign-in">
                                    <Button className="px-4 text-sm rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:active:bg-[#3a5ecc] active:bg-[#3a5ecc] active:text-white">
                                        Sign in
                                    </Button>
                                </Link>

                                <Link href="/sign-up">
                                    <Button className="px-4 text-sm rounded-md bg-[#4169E1] text-white hover:bg-[#3a5ecc] active:bg-gray-600">
                                        Sign up
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden">
                        <div className="space-y-1 px-4 py-3">
                            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-800">
                                {isAuthenticated ? (
                                    <div>
                                        <div className="flex items-center px-3">
                                            <div className="flex-shrink-0">
                                                <div className="h-8 w-8 rounded-full bg-[#4169E1] text-white flex items-center justify-center">
                                                    <UserIcon />
                                                </div>
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-base font-medium text-gray-800 dark:text-white">
                                                    Guest User
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    guest@example.com
                                                </div>
                                            </div>
                                            <button
                                                className="ml-auto rounded-md p-1.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                                                aria-label="Notifications">
                                                <BellIcon />
                                            </button>
                                        </div>
                                        <div className="mt-3 space-y-1 px-2">
                                            <Link
                                                href="/profile"
                                                className="block rounded-md px-3 py-2 text-base text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }>
                                                Your Profile
                                            </Link>
                                            <Link
                                                href="/settings"
                                                className="block rounded-md px-3 py-2 text-base text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }>
                                                Settings
                                            </Link>
                                            <button className="block w-full text-left rounded-md px-3 py-2 text-base text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
                                                Sign out
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="">
                                        <Link href="/sign-in">
                                            <Button className="px-4 text-sm rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:active:bg-[#3a5ecc] active:bg-[#3a5ecc] active:text-white">
                                                Sign in
                                            </Button>
                                        </Link>

                                        <p style={{visibility: 'hidden'}}>separator</p>

                                        <Link href="/sign-up">
                                            <Button className="px-4 text-sm rounded-md bg-[#4169E1] text-white hover:bg-[#3a5ecc] active:bg-gray-600">
                                                Sign up
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Desktop Left Sidebar */}
            <Sidebar isOpen={isSidebarOpen} />

            {/* Mobile Bottom Navigation */}
            <MobileNavigation />

            {/* Main content wrapper with padding for sidebar */}
            {/* <div
                className={
                    'min-h-[calc(100vh-3.5rem)] transition-all duration-300 md:pt-0 ' +
                    (isSidebarOpen ? 'md:ml-64' : 'md:ml-0')
                }></div> */}
        </>
    );
}
