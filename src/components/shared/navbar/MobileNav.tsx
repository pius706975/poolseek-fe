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
} from '@/assets/svg/icons';

export default function MobileNavigation() {
    const [mobileNavIndex, setMobileNavIndex] = useState(0);
    const pathname = usePathname();

    const sidebarItems = [
        { name: 'Home', href: '/', icon: HomeIcon },
        { name: 'Questions', href: '/questions', icon: GlobeIcon },
        { name: 'Collection', href: '/collection', icon: CollectionIcon },
        { name: 'Find Jobs', href: '/jobs', icon: BriefcaseIcon },
        { name: 'Tags', href: '/tags', icon: AwardIcon },
        {
            name: 'Ask a Question',
            href: '/ask',
            icon: PlusIcon,
            highlight: true,
        },
    ];

    // For mobile navigation, we'll show 4 items at a time
    const visibleMobileItems = sidebarItems.slice(
        mobileNavIndex,
        mobileNavIndex + 4,
    );

    const canScrollLeft = mobileNavIndex > 0;
    const canScrollRight = mobileNavIndex + 4 < sidebarItems.length;

    const scrollLeft = () => {
        if (canScrollLeft) {
            setMobileNavIndex(mobileNavIndex - 1);
        }
    };

    const scrollRight = () => {
        if (canScrollRight) {
            setMobileNavIndex(mobileNavIndex + 1);
        }
    };

    // Touch swipe handling for mobile navigation
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const difference = touchStartX.current - touchEndX.current;

        // If swipe distance is significant (more than 50px)
        if (Math.abs(difference) > 50) {
            if (difference > 0) {
                // Swipe left
                if (canScrollRight) scrollRight();
            } else {
                // Swipe right
                if (canScrollLeft) scrollLeft();
            }
        }
    };

    return (
        <div
            className="fixed bottom-0 left-0 z-40 w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <div className="relative flex h-16 items-center justify-between px-2">
                {/* Left scroll button */}
                <button
                    onClick={scrollLeft}
                    className={
                        'flex h-8 w-8 items-center justify-center rounded-full ' +
                        (canScrollLeft
                            ? 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                            : 'text-gray-300 dark:text-gray-700')
                    }
                    disabled={!canScrollLeft}
                    aria-label="Scroll left">
                    <ChevronLeftIcon />
                </button>

                {/* Navigation items */}
                <div className="flex flex-1 justify-around px-2">
                    {visibleMobileItems.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={
                                'flex flex-col items-center justify-center rounded-md px-2 py-1 text-xs ' +
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
                    className={
                        'flex h-8 w-8 items-center justify-center rounded-full ' +
                        (canScrollRight
                            ? 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                            : 'text-gray-300 dark:text-gray-700')
                    }
                    disabled={!canScrollRight}
                    aria-label="Scroll right">
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
}
