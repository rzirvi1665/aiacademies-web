import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import classNames from 'classnames';
import { AiOutlineCheck, AiOutlineExclamation } from 'react-icons/ai';
import { Field, Form, Formik } from 'formik';
import { Input } from '~/components/Forms';
import { Button } from '~/components/Button';
import { registerSchema } from '~/utils/schema';
import { useSession } from '~/utils/sessionHooks';

interface RequirementProps {
    valid: boolean;
}

const Requirement: React.FC<RequirementProps> = ({ valid, children }) => (
    <p className={classNames('flex items-center gap-2 mb-1 text-sm', { 'text-red-400': !valid, 'text-green-500': valid })}>
        {valid ? <AiOutlineCheck size={21} /> : <AiOutlineExclamation size={21} />}
        {children}
    </p>
);

function validatePassword(password: string) {
    return ([
        password.length >= 8,
        !!password.match(/[A-Z]/),
        !!password.match(/\d/),
        !!password.match(/[()[\]{}|\\`~!@#$%^&*_\-+=;:'",<>./?]/),
    ]);
}

const SignUp: NextPage = () => {
    const session = useSession();

    if (session) {
        Router.push('/');
    }

    return (
        <div className="container">
            <div className="lg:w-[30rem] py-28 mx-auto">
                <h1 className="font-medium">Sign Up</h1>
                <p className="mb-10">
                    Have an account already?
                    {' '}
                    <Link href="/signin" passHref>
                        <a className="underline underline-offset-2">Sign in</a>
                    </Link>
                    {' '}
                    instead.
                </p>
                <Formik
                    initialValues={{
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                        password2: '',
                    }}
                    validationSchema={registerSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        axios
                            .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register/`, values)
                            .then(({ data }) => {
                                localStorage.setItem('access', data.access);
                                localStorage.setItem('refresh', data.refresh);
                                window.dispatchEvent(new Event('auth'));
                                Router.push('/profile');
                            })
                            .finally(() => setSubmitting(false));
                    }}
                >
                    {({ values, errors, isSubmitting }) => {
                        const passwordValidation = validatePassword(values.password);
                        return (
                            <Form>
                                <div className="flex gap-4 mb-4">
                                    <Field required as={Input} label="First Name" name="first_name" error={errors.first_name} />
                                    <Field required as={Input} label="Last Name" name="last_name" error={errors.last_name} />
                                </div>

                                <Field required as={Input} className="mb-4" label="Email" name="email" type="email" error={errors.email} />

                                <Field required as={Input} className="mb-4" label="Password" name="password" type="password" error={errors.password} />
                                <div
                                    className={classNames(
                                        'overflow-hidden duration-200',
                                        {
                                            'h-0': !errors.password || passwordValidation.every((a) => a),
                                            'h-28': errors.password && passwordValidation.some((a) => !a),
                                        }
                                    )}
                                >
                                    <Requirement valid={passwordValidation[0]}>At least 8 characters long</Requirement>
                                    <Requirement valid={passwordValidation[1]}>At least one uppercase letter</Requirement>
                                    <Requirement valid={passwordValidation[2]}>At least one number</Requirement>
                                    <Requirement valid={passwordValidation[3]}>At least one special character</Requirement>
                                </div>

                                <Field required as={Input} className="mb-8" label="Confirm Password" name="password2" type="password" error={errors.password2} />
                                <Button
                                    className="bg-deepblue-700 text-white"
                                    loading={isSubmitting}
                                    disabled={!!Object.keys(errors).length}
                                    type="submit"
                                >
                                    Sign Up
                                </Button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};

export default SignUp;
