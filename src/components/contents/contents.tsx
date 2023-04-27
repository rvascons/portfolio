import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Studies from './studies/studies';
import Projects from './projects/projects';
import Resume from './resume/resume';

const Content: React.FC = () => {
    return (
        <div
            className={`flex-col h-full flex-1`}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />} >
                        <Route index element={<Resume />} />
                        <Route path="studies" element={<Studies />} />
                        <Route path="projects" element={<Projects />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div >
    );
};

export default Content;
