import React from 'react';
import errorImage from '../img/error.webp';

const Error404: React.FC = () => {
    return (
        <div className="container text-center py-5">
            <img src={errorImage} height={300} className="mb-5" />
            <h1>Error 404: Not Found</h1>
        </div>
    );
};

export default Error404;
