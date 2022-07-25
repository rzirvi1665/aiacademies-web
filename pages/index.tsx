import React from 'react';
import { NextPage } from 'next';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { Accordion, AccordionElement } from '~/components/Accordion';
import { PageHeader } from '~/components/PageHeader';
import { useSession } from '~/utils/sessionHooks';

const Home: NextPage = () => {
    const session = useSession();

    return (
        <>
            <PageHeader title={session ? `Welcome back, ${session.firstName}!` : 'Welcome to AI Academies!'} />
            <div className="container py-10">
                <h2 className="inline-flex items-center font-medium mb-10">
                    <AiFillQuestionCircle className="mr-2" />
                    Frequently Asked Questions
                </h2>
                <Accordion>
                    <AccordionElement title="What is this site?">
                        AI Academies is a user-friendly introduction to artificial intelligence and machine learning. The site’s goal is to make AI content accessible and free to all since current resources online are either overwhelmingly complicated or too expensive.
                    </AccordionElement>
                    <AccordionElement title="Why AI?">
                        Every student should have the opportunity to learn AI. It is shaping the future of humanity across nearly every industry, so by starting early, students will have a foundation for success. The job market for AI is booming due to high demand, making careers in AI lucrative and stable. In addition, AI can make a real impact in the world by improving the lives of others. AI is still a new field, so there is a lot more research to be done and a lot more to discover.
                    </AccordionElement>
                    <AccordionElement title="Do I need any prior experience?">
                        Not at all! All experience levels from beginner to advanced are welcomed and encouraged!
                    </AccordionElement>
                    <AccordionElement title="How do I create an account?">
                        Simply click the “Sign Up” button on the top right, and then enter your full name, email address, and password.
                    </AccordionElement>
                    <AccordionElement title="What device should I use?">
                        We recommend using a laptop or a device with a large screen for the best user experience. On mobile, some of the images may look distorted.
                    </AccordionElement>
                    <AccordionElement title="How do the courses work?">
                        Each course is complete with lessons, template code, and quizzes. Once you make an account, you can attempt quizzes (they have unlimited attempts and show your score after each attempt). Courses are recommended to be completed in the order they appear.
                    </AccordionElement>
                    <AccordionElement title="What programming languages will I use?">
                        These courses all use Python, a programming language used heavily in AI and machine learning.
                    </AccordionElement>
                </Accordion>
            </div>
        </>
    );
};

export default Home;
