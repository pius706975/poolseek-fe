'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    HomeIcon,
    GlobeIcon,
    CollectionIcon,
    BriefcaseIcon,
    AwardIcon,
    PlusIcon,
    BlogIcon,
} from '@/assets/svg/icons';

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
    const pathname = usePathname();

    const sidebarItems = [
        { name: 'Home', href: '/', icon: HomeIcon },
        { name: 'Explore', href: '/under-development', icon: GlobeIcon },
        { name: 'Saved Items', href: '/under-development', icon: CollectionIcon },
        { name: 'Find Jobs', href: '/under-development', icon: BriefcaseIcon },
        { name: 'Topics', href: '/under-development', icon: AwardIcon },
        { name: 'Blog', href: '/under-development', icon: BlogIcon },
        {
            name: 'Ask a Question',
            href: '/ask',
            icon: PlusIcon,
            highlight: true,
        },
    ];

    return (
        <div
            className={
                'fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] transform overflow-y-auto border-r border-gray-200 bg-white transition-all duration-300 dark:border-gray-800 dark:bg-gray-950 hidden md:block ' +
                (isOpen ? 'w-64' : 'w-[4.5rem]')
            }>
            <nav className="p-2">
                <ul className="space-y-2">
                    {sidebarItems.map(item => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={
                                    'flex items-center rounded-md px-3 py-2 text-sm transition-colors ' +
                                    (pathname === item.href
                                        ? 'bg-[#4169E1]/10 text-[#4169E1] dark:bg-[#4169E1]/20'
                                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800') +
                                    (item.highlight && isOpen
                                        ? ' mt-6 bg-[#4169E1] text-white hover:bg-[#3a5ecc] dark:bg-[#4169E1] dark:text-white dark:hover:bg-[#3a5ecc]'
                                        : '') +
                                    (item.highlight && !isOpen
                                        ? ' mt-6 bg-[#4169E1] text-white hover:bg-[#3a5ecc] dark:bg-[#4169E1] dark:text-white dark:hover:bg-[#3a5ecc]'
                                        : '') +
                                    (!isOpen ? ' justify-center' : '')
                                }
                                title={!isOpen ? item.name : undefined}>
                                <item.icon className={isOpen ? 'mr-2' : ''} />
                                {isOpen && <span>{item.name}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
