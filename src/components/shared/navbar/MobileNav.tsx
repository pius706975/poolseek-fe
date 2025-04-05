'use client';

import type React from 'react';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    HomeIcon,
    GlobeIcon,
    CollectionIcon,
    BriefcaseIcon,
    AwardIcon,
    PlusIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    BlogIcon,
} from '@/assets/svg/icons';

export default function MobileNavigation() {
    const pathname = usePathname();
    const scrollRef = useRef<HTMLDivElement>(null);

    const sidebarItems = [
        { name: 'Home', href: '/', icon: HomeIcon },
        { name: 'Explore', href: '/under-development', icon: GlobeIcon },
        {
            name: 'Saved Items',
            href: '/under-development',
            icon: CollectionIcon,
        },
        { name: 'Find Jobs', href: '/under-development', icon: BriefcaseIcon },
        { name: 'Topics', href: '/under-development', icon: AwardIcon },
        { name: 'Blog', href: '/under-development', icon: BlogIcon },
        {
            name: 'Ask Now',
            href: '/ask',
            icon: PlusIcon,
            highlight: true,
        },
    ];

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -120, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 120, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-0 left-0 z-40 w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden">
            <div className="relative flex h-16 items-center justify-between px-2">
                {/* Left scroll button */}
                <button
                    onClick={scrollLeft}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                    aria-label="Scroll left">
                    <ChevronLeftIcon />
                </button>

                {/* Navigation items */}
                <div
                    ref={scrollRef}
                    className="flex flex-1 gap-2 overflow-x-auto scroll-smooth px-2 no-scrollbar">
                    {sidebarItems.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={
                                'flex flex-shrink-0 flex-col items-center justify-center rounded-md px-4 py-1 text-xs ' +
                                (pathname === item.href
                                    ? 'text-[#4169E1]'
                                    : 'text-gray-600 dark:text-gray-400') +
                                (item.highlight
                                    ? ' bg-[#4169E1] text-white rounded-full px-3'
                                    : '')
                            }>
                            <item.icon className="mb-1" />
                            <span className="truncate max-w-[60px] text-center">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Right scroll button */}
                <button
                    onClick={scrollRight}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                    aria-label="Scroll right">
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
}
