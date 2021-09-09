import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { FaFlagCheckered, FaRegClock, FiArrowRight } from 'react-icons/all';
import axiosInstance from '../helpers/axiosInstance';
import Error404 from './Error404';

type Lesson = {
    id: number;
    title: string;
    duration_minutes: number;
    points: number;
    content: string;
}

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

const Course: React.FC = () => {
    const [course, setCourse] = useState<Course>();
    const [show404, setShow404] = useState(false);

    const { courseId } = useParams<never>();

    const fetchCourse = () => {
        axiosInstance
            .get(`/api/courses/${courseId}/`)
            .then(res => setCourse(res.data))
            .catch(err => {
                if (err.code === 404) setShow404(true);
            });
    };

    const difficultyIntToString = (difficulty: number | undefined) => {
        switch (difficulty) {
        case 0: return 'Easy';
        case 1: return 'Moderate';
        case 2: return 'Difficult';
        case 3: return 'Expert';
        default: return 'Unknown';
        }
    };

    const renderLesson = (lesson: Lesson, i: number) => (
        <div className="lesson py-1" key={lesson.id}>
            <Link to={`/courses/${courseId}/${lesson.id}`} className="d-flex justify-content-between align-items-center lesson-link text-decoration-none">
                <div>
                    <h6 className="text-black mb-1">{i + 1}. {lesson.title}</h6>
                    <div className="text-gray">
                        <span className="me-4"><FaRegClock size={15} /> {lesson.duration_minutes} min</span>
                        <span><FaFlagCheckered size={15} /> {lesson.points} pts</span>
                    </div>
                </div>
                <span className="text-blue-400 font-w400 link-unstyled">
                    View Lesson <FiArrowRight />
                </span>
            </Link>
        </div>
    );

    useEffect(fetchCourse, []);

    if (show404) return <Error404 />;
    if (!course) return <h1>Loading</h1>;

    return (
        <>
            <div className="bg-blue-900 text-white header">
                <div className="container">
                    <h1>{course.name}</h1>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <div className="card p-5">
                            <h3 className="font-w600 mb-4">Courses</h3>
                            <div className="lesson-list">
                                {course.lessons.map(renderLesson)}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4">
                            <img src={course.banner} alt="" className="course-img-lg" />
                            <div className="p-5">
                                <h3 className="font-w600 mb-4">{course.name}</h3>
                                <button className="btn btn-blue-400 me-3">Enroll</button>
                                <span className="font-w400">{course.enrolled} enrolled</span>
                            </div>
                        </div>
                        <div className="card p-5">
                            <h3 className="font-w600 mb-4">Course Description</h3>
                            <p><b>Approximate Duration:</b> {course.total_duration} Hour{course.total_duration !== 1 && 's'}</p>
                            <p><b>Difficulty:</b> {difficultyIntToString(course.difficulty)}</p>
                            <p><Markdown>{course.description ?? ''}</Markdown></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Course;
