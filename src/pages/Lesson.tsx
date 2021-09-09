import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Markdown from 'markdown-to-jsx';
import axiosInstance from '../helpers/axiosInstance';
import CodeBlock from '../components/CodeBlock';
import Error404 from './Error404';

type Course = {
    id: number;
    lessons: Lesson[];
    total_duration: number;
    name: string;
    banner: string;
    featured: boolean;
    description: string;
    difficulty: number;
    enrolled: number;
}

type Lesson = {
    id: number;
    index: number;
    duration_minutes: number;
    title: string;
    points: number;
    content: string;
}

const Lesson: React.FC = () => {
    const [course, setCourse] = useState<Course>();
    const [lesson, setLesson] = useState<Lesson>();
    const [show404, setShow404] = useState(false);

    const { courseId, lessonId } = useParams<never>();

    const fetchCourse = () => {
        axiosInstance
            .get(`/api/courses/${courseId}/`)
            .then(res => setCourse(res.data))
            .catch(err => {
                if (err.code === 404) setShow404(true);
            });
    };

    const fetchlesson = () => {
        axiosInstance
            .get(`/api/lessons/${lessonId}/`)
            .then(res => setLesson(res.data))
            .catch(err => {
                if (err.code === 404) setShow404(true);
            });
    };

    useEffect(fetchCourse, []);
    useEffect(fetchlesson, []);

    if (show404) return <Error404 />;
    if (!course || !lesson) return <h1>Loading</h1>;

    return (
        <>
            <div className="bg-blue-900 text-white header">
                <div className="container">
                    <h1>{course.name}</h1>
                    <h3 className="font-w300">{course.lessons.findIndex(x => x.id === lesson.id) + 1}. {lesson.title}</h3>
                </div>
            </div>
            <div className="container py-5">
                <Markdown className="markdown-body" options={{ overrides: { pre: CodeBlock } }}>
                    {lesson.content}
                </Markdown>
            </div>
        </>
    );
};

export default Lesson;
