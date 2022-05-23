import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { Input } from '~/components/Forms';
import { Button } from '~/components/Button';
import { signinSchema } from '~/utils/schema';
import { useSession } from '~/utils/sessionHooks';

const SignIn: NextPage = () => {
    const session = useSession();

    if (session) {
        Router.push('/');
    }

    return (
        <div className="container">
            <div className="w-[30rem] py-28 mx-auto">
                <h1 className="font-medium">Sign In</h1>
                <p className="mb-10">
                    Don&apos;t have an account?
                    {' '}
                    <Link href="/signup" passHref>
                        <a className="underline underline-offset-2">Sign up</a>
                    </Link>
                    {' '}
                    now!
                </p>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={signinSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        axios
                            .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/`, values)
                            .then(({ data }) => {
                                localStorage.setItem('access', data.access);
                                localStorage.setItem('refresh', data.refresh);
                                window.dispatchEvent(new Event('auth'));
                                Router.push('/');
                            })
                            .finally(() => setSubmitting(false));
                    }}
                >
                    {({ errors, isSubmitting }) => (
                        <Form>
                            <Field required as={Input} className="mb-4" label="Email" name="email" type="email" error={errors.email} />

                            <Field required as={Input} className="mb-8" label="Password" name="password" type="password" error={errors.password} />
                            <Button
                                className="bg-deepblue-700 text-white" type="submit"
                                loading={isSubmitting}
                                disabled={!!Object.keys(errors).length}
                            >
                                Sign In
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignIn;
