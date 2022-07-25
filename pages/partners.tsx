import React from 'react';
import { NextPage } from 'next';
import { PageHeader } from '~/components/PageHeader';
import Image from 'next/image';
import educationProject from '~/public/img/EducationProject.jpg';
import ayeshaAli from '~/public/img/AyeshaAli.jpg';

const Partners: NextPage = () => (
    <>
        <PageHeader title="Partners" />
        <div className="container py-10">
            <h1>The Education Project By Humanity First USA</h1>
            <a href="https://theeduproject.net/" target="_blank" rel="noreferrer"> <Image src={educationProject} alt="The Education Project" width={500} height={598} /></a>
            <br/>
            <h1>Ayesha Ali Academy</h1>
            <br/>
            <a href="https://aa.academy/" target="_blank" rel="noreferrer"> <Image src={ayeshaAli} alt="Ayesha Ali Academy" width={500} height={500} /></a>
        </div>
    </>
);

export default Partners;
