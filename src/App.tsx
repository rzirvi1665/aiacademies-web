import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CourseList from './pages/CourseList';
import Course from './pages/Course';
import Lesson from './pages/Lesson';
import Error404 from './pages/Error404';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <div style={{ marginTop: 110 }}>
                <Switch>
                    <Route exact path="/courses" component={CourseList} />
                    <Route exact path="/courses/:courseId" component={Course} />
                    <Route exact path="/courses/:courseId/:lessonId" component={Lesson} />
                    <Route component={Error404} />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
