import { object, string, number, ref } from 'yup';

export const registerSchema = object({
    first_name: string().required('Required'),
    last_name: string().required('Required'),
    email: string()
        .email('Invalid email')
        .required('Required'),
    password: string()
        .oneOf([ref('password2')], 'Passwords don\'t match')
        .matches(/(?=.*.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[()[\]{}|\\`~!@#$%^&*_\-+=;:'",<>./?])/, 'Invalid password')
        .required('Required'),
    password2: string()
        .oneOf([ref('password')], 'Passwords don\'t match')
        .required('Required'),
});

export const signinSchema = object({
    email: string()
        .email('Invalid email')
        .required('Required'),
    password: string().required('Required'),
});

export const profileSchema = object({
    ethnicity: string()
        .oneOf(['asian', 'black', 'caucasian', 'hispanic', 'pacific', 'omitted'], 'Invalid selection')
        .required('Required'),
    gender: string()
        .oneOf(['male', 'female', 'other', 'omitted'], 'Invalid selection')
        .required('Required'),
    experience: number().optional(),
    birth_year: number().optional(),
    city_state: string().optional(),
});
