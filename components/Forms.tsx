import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface InputProps extends HTMLProps<HTMLInputElement> {
    label: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, name, required, className, ...other }) => (
    <div className={classNames('relative duration-300', { 'h-16': !error, 'h-20': error }, className)}>
        <label htmlFor={name} className="font-medium mb-2 whitespace-nowrap">
            {label}&nbsp;
            {required
                ? <span className="text-red-400">*</span>
                : <span className="text-slate-400 text-sm">(optional)</span>}
        </label>
        <input
            id={name}
            name={name}
            required={required}
            className={classNames(
                'block py-2 px-3 border rounded-md w-full duration-150 outline outline-0 outline-white outline-offset-1 focus:outline-2',
                { 'border-slate-300': !error, 'border-red-400': error, 'focus:outline-slate-300/50': !error, 'focus:outline-red-400/50': error }
            )}
            {...other}
        />
        <span className="text-sm text-red-400">{error}</span>
    </div>
);

interface RadioProps extends InputProps {
    choices: { label: string, value: string }[];
}

export const Radio: React.FC<RadioProps> = ({ label, required, choices, className, value, ...other }) => (
    <div className={className}>
        <label className="font-medium mb-2">
            {label}
            {required && <span className="text-red-400">*</span>}
        </label>
        {choices.map(({ label, value }) => (
            <div key={value} className="block flex items-center">
                <input
                    type="radio"
                    id={value}
                    value={value}
                    required={required}
                    className={classNames(
                        'mr-2 w-4 h-4 cursor-pointer'
                    )}
                    {...other}
                />
                <label htmlFor={value}>{label}</label>
            </div>
        ))}
    </div>
);
