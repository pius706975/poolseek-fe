'use client';
import { useEffect, useState } from 'react';

interface ToastProps {
    id: number;
    type: 'success' | 'error' | 'info';
    message: string;
}

const Toast = ({ id, type, message }: ToastProps) => {
    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (!visible) return;

        const progressInterval = setInterval(() => {
            setProgress(prev => (prev > 0 ? prev - 1 : 0));
        }, 50);

        return () => clearInterval(progressInterval);
    }, [visible]);

    if (!visible) return null;

    return (
        <div
            className={`relative max-w-md w-full sm:w-auto min-w-[300px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out
                ${
                    type === 'success'
                        ? 'bg-[#4169E1] text-white' 
                        : type === 'error'
                        ? 'bg-red-600 text-white' 
                        : 'bg-blue-500 text-white'
                }
            `}>
            <div className="relative overflow-hidden rounded-lg p-4 pr-10 flex items-center gap-3">
                {type === 'success' ? <CheckCircle /> : <AlertCircle />}
                <p className="font-medium">{message}</p>

                <button
                    onClick={() => setVisible(false)}
                    className="absolute right-2 top-2 rounded-full p-1 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
                    aria-label="Close">
                    <XIcon />
                </button>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
                <div
                    className="h-full bg-white/70"
                    style={{
                        width: `${progress}%`,
                        transition: 'width 50ms linear',
                    }}
                />
            </div>
        </div>
    );
};

const CheckCircle = () => (
    <svg
        className="h-5 w-5 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

const AlertCircle = () => (
    <svg
        className="h-5 w-5 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12" y2="16" />
    </svg>
);

const XIcon = () => (
    <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export default Toast;
