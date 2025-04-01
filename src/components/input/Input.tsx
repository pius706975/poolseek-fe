import React, { useState } from 'react';

type InputProps = {
    type: string;
    placeholder: string;
    value?: string;
    label?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
    type,
    placeholder,
    value,
    label,
    onChange,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType =
        type === 'password' ? (showPassword ? 'text' : 'password') : type;

    return (
        <div className="relative">
            {label && (
                <label className="block text-sm font-medium mb-2">
                    {label}
                </label>
            )}

            <div className="relative">
                <input
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:#4169E1-600 pr-10"
                />

                {type === 'password' && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                        {showPassword ? openEye() : closeEye()}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Input;

const closeEye = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.78 14.37A3 3 0 1112 9a3 3 0 013.78 5.37zM3.05 12c1.72-4.3 5.69-7 8.95-7s7.23 2.7 8.95 7c-1.72 4.3-5.69 7-8.95 7s-7.23-2.7-8.95-7z"
        />
    </svg>
);

const openEye = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A9.952 9.952 0 0112 19c-3.5 0-7.08-1.83-9.405-5C3.54 11.52 6.71 7.58 12 7.58c1.3 0 2.53.21 3.67.61M3 3l18 18"
        />
    </svg>
);
