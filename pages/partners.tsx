import React from 'react';
import { NextPage } from 'next';
import { PageHeader } from '~/components/PageHeader';
import Image from 'next/image';
import rayhan from '~/public/img/rayhan.jpg';
import humanityFirst from '~/public/img/HumanityFirst.png';

const Partners: NextPage = () => (
    <>
        <PageHeader title="Partners" />
        <div className="container py-10">
            <h1>Humanity First</h1>
            <Image src={humanityFirst} alt="Humanity First" width={676} height={598} />
            <br/>
            <h1>Ayesha Ali Academy</h1>
            <Image src={rayhan} alt="Rayhan Zirvi" width={676} height={598} />
        </div>
    </>
);

export default Partners;
