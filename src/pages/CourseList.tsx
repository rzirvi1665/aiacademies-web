import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, RiFileCopy2Line } from 'react-icons/all';
import axiosInstance from '../helpers/axiosInstance';

type Course = {
    id: number;
    lessons: number;
    total_duration: number;
    name: string;
    banner: string;
    featured: boolean;
    description: string;
    difficulty: number;
    enrolled: number;
}

const CourseList: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    const fetchCourses = () => {
        axiosInstance
            .get('/api/courses/')
            .then(res => setCourses(res.data));
    };

    useEffect(fetchCourses, []);

    const renderCourseCard = (course: Course) => (
        <div className="col">
            <Link to={`/courses/${course.id}`} className="text-decoration-none">
                <div className="card card-link">
                    <img src={course.banner} alt="" className="course-img" />
                    <div className="p-4">
                        <h5 className="font-w500 text-black text-ellipsis">{course.name}</h5>
                        <p className="text-gray font-w400 mb-0">
                            <RiFileCopy2Line /> {course.lessons} Lesson{course.lessons === 1 ? '' : 's'}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );

    return (
        <>
            <div className="bg-blue-900 text-white header">
                <div className="container">
                    <h1>Courses</h1>
                </div>
            </div>
            <div className="container text-black">
                <div className="card course-search d-flex align-items-center my-5">
                    <AiOutlineSearch size={30} className="text-gray me-3" />
                    <div className="flex-grow-1 me-3">
                        <input placeholder="Search for a course or subject..." />
                    </div>
                    <button className="btn btn-xl btn-blue-400">Search</button>
                </div>

                <h3 className="font-w500 mb-3">Featured Courses</h3>
                <div className="row gx-5 mb-5">
                    {courses.filter(course => course.featured).map(renderCourseCard)}
                </div>

                <h3 className="font-w500 mb-3">All Courses</h3>
                <div className="row gx-5 mb-5">
                    {courses.map(renderCourseCard)}
                </div>
            </div>
        </>
    );
};

export default CourseList;
