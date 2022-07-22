import React from 'react';
import styled from 'styled-components/macro';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from '../containers/Layout';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Welcome from '../pages/Welcome';
import ProjectPage from '../pages/ProjectPage';
import NotFound from '../pages/NotFound';
import BlogPage from '../pages/BlogPage';


const App = () => {
    return (
        <Wrappper>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Welcome />} />
                        <Route path='projects' element={<ProjectPage />} />
                        <Route path='blog' element={<BlogPage />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
                <Footer />
            </HashRouter>
        </Wrappper>
    );
};


const Wrappper = styled.div`
    height: fit-content;
`;


export default App;