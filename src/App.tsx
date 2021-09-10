import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CourseList from './pages/CourseList';
import Course from './pages/Course';
import Lesson from './pages/Lesson';
import Error404 from './pages/Error404';

const App: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <Navigation />
            {/*<TransitionGroup>*/}
            {/*    <CSSTransition*/}
            {/*        timeout={300}*/}
            {/*        classNames="fade"*/}
            {/*        key={location.key}*/}
            {/*    >*/}
            <div style={{ marginTop: 110 }}>
                <Switch location={location}>
                    <Route exact path="/" component={CourseList} />
                    <Route exact path="/courses" component={CourseList} />
                    <Route exact path="/courses/:courseId" component={Course} />
                    <Route exact path="/courses/:courseId/:lessonId" component={Lesson} />
                    <Route component={Error404} />
                </Switch>
            </div>
            {/*    </CSSTransition>*/}
            {/*</TransitionGroup>*/}
            <Footer />
        </>
    );
};

export default App;
