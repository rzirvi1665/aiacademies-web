import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export const Card: React.FC<HTMLProps<HTMLDivElement>> = ({ className, children, ...other }) => (
    <div className={classNames('shadow-xl rounded-2xl p-10', className)} {...other}>
        {children}
    </div>
);
