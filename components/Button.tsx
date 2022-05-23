import React, { ButtonHTMLAttributes } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ loading, disabled, className, children, ...other }) => (
    <button
        className={classNames(
            'rounded-lg px-3 py-2 duration-200 min-w-32 flex items-center',
            { 'opacity-100 pointer-events-auto': !disabled && !loading, 'opacity-50 pointer-events-none': disabled || loading },
            className,
        )}
        {...other}
    >
        {loading && <AiOutlineLoading className="animate-spin mr-2" size={21} />}
        {children}
    </button>
);
