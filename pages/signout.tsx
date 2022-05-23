import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';

const SignIn: NextPage = () => {
    useEffect(() => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        window.dispatchEvent(new Event('auth'));
        Router.push('/');
    }, []);

    return <></>;
};

export default SignIn;
