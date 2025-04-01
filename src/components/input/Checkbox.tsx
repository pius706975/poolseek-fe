import React from 'react';

type CheckboxProps = {
    checked: boolean;
    onChange: () => void;
    label?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
    return (
        <div className="flex item-center gap-2">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="w-4 h-4"
            />
            <label className="text-black dark:text-gray-300">{label}</label>
        </div>
    );
};

export default Checkbox;
