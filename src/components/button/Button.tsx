import React from 'react';

type ButtonProps = {
    onClick?: () => void;
    type?: any
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
    onClick,
    type,
    className = 'bg-[#4169E1] hover:bg-[#3656B3] active:bg-[#2C4499] text-white',
    disabled,
    children,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full py-2 rounded-lg transition ${className}`}
            disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
