import React from 'react';
import Image from 'next/image';
import errorImage from '../public/img/error.webp';

const Error404: React.FC = () => {
    return (
        <div className="container text-center py-5">
            <Image src={errorImage} alt="" height={300} className="mb-5" />
            <h1>Error 404: Not Found</h1>
        </div>
    );
};

export default Error404;
