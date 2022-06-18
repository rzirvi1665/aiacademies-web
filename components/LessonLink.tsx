import React from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineFlag } from 'react-icons/ai';
import { Lesson, Quiz } from '~/types/api';
import { useSession } from '~/utils/sessionHooks';

interface LessonLinkProps {
    lesson: Lesson;
}

export const LessonLink: React.FC<LessonLinkProps> = ({ lesson }) => (
    <Link href={`/courses/${lesson.course_id ?? 1}/lesson/${lesson.id}`} passHref>
        <a className="relative flex justify-between duration-200 hover:bg-slate-100 rounded px-4 py-3">
            <span className="absolute -left-8 top-4 w-6 h-6 bg-slate-200 border-white border-4 rounded-full" />
            <div>
                <h5 className="font-medium mb-1">{lesson.number ?? 0}. {lesson.title}</h5>
                <div className="text-slate-400">
                    <span className="inline-flex items-center mr-5">
                        <AiOutlineClockCircle size={21} className="mr-1" />
                        {lesson.duration_minutes} min
                    </span>
                    <span className="inline-flex items-center">
                        <AiOutlineFlag size={21} className="mr-1" />
                        {lesson.points} pts
                    </span>
                </div>
            </div>
            <span className="inline-flex items-center text-deepblue-400">
                View Lesson <AiOutlineArrowRight size={21} className="ml-1"/>
            </span>
        </a>
    </Link>
);

interface QuizLinkProps {
    quiz: Quiz;
}

export const QuizLink: React.FC<QuizLinkProps> = ({ quiz }) => {
    const session = useSession();
    if (session) {
        return (
            <Link href={`/courses/${quiz.course_id ?? 1}/quiz/${quiz.id}`} passHref>
                <a className="relative flex justify-between duration-200 hover:bg-slate-100 rounded px-4 py-3">
                    <span className="absolute -left-8 top-4 w-6 h-6 bg-slate-200 border-white border-4 rounded-full" />
                    <div>
                        <h5 className="font-medium mb-0">{quiz.number ?? 0}. {quiz.title}</h5>
                    </div>
                    <span className="inline-flex items-center text-deepblue-700">
                        Attempt Quiz <AiOutlineArrowRight size={21} className="ml-1"/>
                    </span>
                </a>
            </Link>
        );
    }
    return (
        <a className="relative flex justify-between rounded px-4 py-3">
            <span className="absolute -left-8 top-4 w-6 h-6 bg-slate-200 border-white border-4 rounded-full" />
            <div>
                <h5 className="font-medium mb-0">{quiz.number ?? 0}. {quiz.title}</h5>
            </div>
            <span className="inline-flex items-center text-deepblue-700 font-medium">
                Sign in to attempt
            </span>
        </a>
    );
}
