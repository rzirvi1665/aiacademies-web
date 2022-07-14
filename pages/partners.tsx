import React from 'react';
import { NextPage } from 'next';
import { PageHeader } from '~/components/PageHeader';
import Image from 'next/image';
import rayhan from '~/public/img/rayhan.jpg';
import humanityFirst from '~/public/img/HumanityFirst.png';
import ayeshaAli from '~/public/img/AyeshaAli.jpg';

const Partners: NextPage = () => (
    <>
        <PageHeader title="Partners" />
        <div className="container py-10">
            <h1>Humanity First</h1>
            <Image src={humanityFirst} alt="Humanity First" width={676} height={598} />
            <br/>
            <h1>Ayesha Ali Academy</h1>
            <Image src={ayeshaAli} alt="Ayesha Ali Academy" width={676} height={598} />
        </div>
    </>
);

export default Partners;
