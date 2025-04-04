'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/button/Button';

export const AskButton = () => {
    const router = useRouter();

    return (
        <Button onClick={() => router.push('/under-development')}>
            Ask a Question
        </Button>
    );
};

export const BrowseButton = () => {
    const router = useRouter();

    return (
        <Button onClick={() => router.push('/under-development')}>
            Browse Questions
        </Button>
    );
};
