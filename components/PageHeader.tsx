import React from 'react'

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
    <div className="bg-deepblue-900 text-white">
        <div
            className="container py-20"
            style={{
                backgroundImage: 'url(\'/img/header.svg\')',
                backgroundPosition: 'bottom right',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <h1 className="text-4xl font-medium">{title}</h1>
            {subtitle && <h3>{subtitle}</h3>}
        </div>
    </div>
);
