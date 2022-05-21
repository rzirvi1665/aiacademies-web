import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '~/public/img/full_logo.png';

const Navigation: React.FC = () => (
    <nav className="sticky top-0 bg-white z-30">
        <div className="container flex items-center">
            <Link href="/" passHref>
                <a>
                    <Image src={logo} alt="AI Academies" height={100} width={333} />
                </a>
            </Link>
        </div>
    </nav>
);

export default Navigation;
