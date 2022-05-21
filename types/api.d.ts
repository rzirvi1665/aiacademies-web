export type BaseCourse = {
    id: number;
    num_lessons: number;
    name: string;
    banner: string;
    featured: boolean;
}

export type Course = {
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

export type Lesson = {
    id: number;
    course_id: number;
    number: number;
    title: string;
    duration_minutes: number;
    points: number;
    content: string;
}
