import React from 'react';
import { NextPage } from 'next';
import { PageHeader } from '~/components/PageHeader';
import Image from 'next/image';
import humanityFirst from '~/public/img/HumanityFirst.png';
import ayeshaAli from '~/public/img/AyeshaAli.jpg';

const Partners: NextPage = () => (
    <>
        <PageHeader title="Partners" />
        <div className="container py-10">
            <h1>Humanity First</h1>
            <a href="https://humanityfirst.org/"> <Image src={humanityFirst} alt="Humanity First" width={500} height={598} /></a>
            <br/>
            <h1>Ayesha Ali Academy</h1>
            <a href="https://aa.academy/"> <Image src={ayeshaAli} alt="Ayesha Ali Academy" width={500} height={500} /></a>
        </div>
    </>
);

export default Partners;
