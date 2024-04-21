import {AnimatePresence} from 'framer-motion';
import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));


function App() {
    return (
        <AnimatePresence>
            <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
                <Router basename="/portfolio">
                    <ScrollToTop/>
                    <AppHeader/>
                    <Suspense fallback={""}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="projects" element={<Projects/>}/>

                            <Route
                                path="projects/income-expense"
                                element={<ProjectSingle/>}
                            />
                            <Route
                                path="projects/freelance-studio"
                                element={<ProjectSingle/>}
                            />
                            <Route
                                path="projects/tea"
                                element={<ProjectSingle/>}
                            />
                            <Route
                                path="projects/hookah"
                                element={<ProjectSingle/>}
                            />
                            <Route
                                path="projects/club-4-horse"
                                element={<ProjectSingle/>}
                            />
                            <Route
                                path="projects/sushi"
                                element={<ProjectSingle/>}
                            />
                            <Route
                                path="projects/cappadocia"
                                element={<ProjectSingle/>}
                            />
                            <Route
                                path="projects/macaroons"
                                element={<ProjectSingle/>}
                            />

                            <Route path="about" element={<About/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="*" element={<Home/>}/>
                        </Routes>
                    </Suspense>
                    <AppFooter/>
                </Router>
                <UseScrollToTop/>
            </div>
        </AnimatePresence>
    );
}

export default App;
