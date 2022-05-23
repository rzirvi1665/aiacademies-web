import React from 'react';
import { NextPage } from 'next';
import { Field, Form, Formik } from 'formik';
import { Input, Radio } from '~/components/Forms';
import { Button } from '~/components/Button';
import { profileSchema } from '~/utils/schema';
import { useSession } from '~/utils/sessionHooks';
import axiosInstance from '~/utils/axiosInstance';
import Router from 'next/router';

const Profile: NextPage = () => {
    const session = useSession();

    return (
        <div className="container">
            <div className="w-[30rem] py-28 mx-auto">
                <h1 className="font-medium">Complete your profile</h1>
                <p className="mb-10">
                    You can change these details at any time in your settings.
                </p>
                <Formik
                    initialValues={{
                        ethnicity: '',
                        gender: '',
                        experience: undefined,
                        birth_year: undefined,
                        city_state: '',
                    }}
                    validationSchema={profileSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        axiosInstance
                            .patch(`${process.env.NEXT_PUBLIC_API_URL}/auth/user/`, values)
                            .then(() => Router.push('/'))
                            .finally(() => setSubmitting(false));
                    }}
                >
                    {({ errors, isSubmitting }) => (
                        <Form>
                            <Field
                                required
                                as={Radio}
                                className="mb-4"
                                label="Ethnicity"
                                name="ethnicity"
                                choices={[
                                    { label: 'Asian', value: 'asian' },
                                    { label: 'Black/African', value: 'black' },
                                    { label: 'Caucasian', value: 'caucasian' },
                                    { label: 'Hispanic/Latinx', value: 'hispanic' },
                                    { label: 'Pacific Islander', value: 'pacific' },
                                    { label: 'Prefer not to answer', value: 'omitted' },
                                ]}
                            />
                            <Field
                                required
                                as={Radio}
                                className="mb-4"
                                label="Gender"
                                name="gender"
                                choices={[
                                    { label: 'Male', value: 'male' },
                                    { label: 'Female', value: 'female' },
                                    { label: 'Non-binary', value: 'other' },
                                    { label: 'Prefer not to answer', value: 'omitted' },
                                ]}
                            />
                            <Field as={Input} className="mb-4 w-24" label="Years of coding experience" name="experience" type="number" />
                            <Field as={Input} className="mb-4 w-24" label="Birth Year" name="birth_year" type="number" />
                            <Field as={Input} className="mb-8" label="City/State" name="city_state" />
                            <Button
                                className="bg-deepblue-700 text-white"
                                loading={isSubmitting}
                                disabled={!!Object.keys(errors).length}
                                type="submit"
                            >
                                Save
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Profile;
