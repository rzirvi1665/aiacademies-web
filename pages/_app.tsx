import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';
import '~/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <meta name="theme-color" content="#03045E" />
            <meta name="description" content="AI Education for Students by Students" />
            <meta name="keywords" content="AI Education, Learn AI, Learn machine learning, Learn python, AI courses, Machine learning courses, Python courses, Artificial Intelligence" />
            <meta property="og:title" content="AI Education" />
            <meta property="og:description" content="AI Education for Students by Students" />
            {/* TODO: Add og:image tag */}

            <title>AI Academies</title>
        </Head>

        <Navigation />
        <Component {...pageProps} />
        <Footer />
    </>
);

export default App;
