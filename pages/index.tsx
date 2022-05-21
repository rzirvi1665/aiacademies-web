import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { CourseCard } from '~/components/CourseCard';
import { BaseCourse } from '~/types/api';
import { PageHeader } from '~/components/PageHeader';

interface CourseListPageProps {
    courses: BaseCourse[];
}

const CourseList: NextPage<CourseListPageProps> = ({ courses }) => (
    <>
        <PageHeader title="Courses" />
        <div className="container py-10">
            {/*<div className="card course-search d-flex align-items-center my-5">*/}
            {/*    <AiOutlineSearch size={30} className="text-gray me-3" />*/}
            {/*    <div className="flex-grow-1 me-3">*/}
            {/*        <input placeholder="Search for a course or subject..." />*/}
            {/*    </div>*/}
            {/*    <button className="btn btn-xl btn-blue-400">Search</button>*/}
            {/*</div>*/}
            <h2 className="inline-flex items-center font-medium mb-10">
                <AiFillStar className="fill-amber-300 mr-2" />
                Featured Courses
            </h2>
            <div className="grid grid-cols-4 gap-10 mb-10">
                {courses?.filter(course => course.featured).map((course) => <CourseCard course={course} />)}
            </div>

            <h2 className="font-medium mb-10">All Courses</h2>
            <div className="grid grid-cols-4 gap-10">
                {courses?.map((course) => <CourseCard course={course} />)}
            </div>
        </div>
    </>
);

export const getServerSideProps: GetServerSideProps = async () => {
    const courses = await axios.get<BaseCourse>(`${process.env.API_URL}/api/courses/`);

    return { props: { courses: courses.data } };
};

export default CourseList;
