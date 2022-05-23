import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import { LessonLink } from '~/components/LessonLink';
import { difficultyIntToString } from '~/utils/strings';
import { Course } from '~/types/api';
import { PageHeader } from '~/components/PageHeader';
import { Card } from '~/components/Card';

interface CoursePageProps {
    course: Course;
}

const Course: NextPage<CoursePageProps> = ({ course }) => (
    <>
        <PageHeader title={course.name} />
        <div className="container py-10">
            <div className="flex gap-10">
                <div className="basis-1/2">
                    <Card>
                        <h2 className="font-medium">Lessons</h2>
                        <div className="relative pl-10">
                            <span className="absolute left-4 w-1.5 h-full bg-slate-200 rounded-full" />
                            {course.lessons.sort((a, b) => a.number > b.number ? 1 : -1).map((lesson) => <LessonLink key={lesson.id} lesson={lesson} />)}
                        </div>
                    </Card>
                </div>
                <div className="basis-1/2">
                    <Card className="!p-0 mb-10">
                        <img
                            src={course.banner}
                            alt={course.name}
                            className="h-96 w-full object-cover rounded-t-2xl"
                        />
                        <div className="p-10">
                            <h2 className="font-medium">{course?.name}</h2>
                            {/*<div style={{ opacity: 0.4, pointerEvents: 'none' }}>*/}
                            {/*    <button className="btn btn-blue-400 me-3">Enroll</button>*/}
                            {/*    <span className="font-w400">{course?.enrolled} enrolled</span>*/}
                            {/*</div>*/}
                        </div>
                    </Card>
                    <Card className="font-light">
                        <h2 className="font-medium">Course Description</h2>
                        <p className="mb-2"><b className="font-medium">Approximate Duration:</b> {course?.total_duration} Hour{course?.total_duration !== 1 && 's'}</p>
                        <p className="mb-2"><b className="font-medium">Difficulty:</b> {difficultyIntToString(course?.difficulty)}</p>
                        <p><Markdown>{course?.description ?? ''}</Markdown></p>
                    </Card>
                </div>
            </div>
        </div>
    </>
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const course = await axios.get<Course>(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/${params!.course_id}/`);

    return { props: { course: course.data } };
};

export default Course;
