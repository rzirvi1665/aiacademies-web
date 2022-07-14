import React from 'react';
import { NextPage } from 'next';
import { PageHeader } from '~/components/PageHeader';

const Partners: NextPage = () => (
    <>
        <PageHeader title="Partners" />
        <div className="container py-10">
            <h1>Humanity First</h1>
            <h1>Ayesha Ali Academy</h1>
        </div>
    </>
);

export default Partners;
