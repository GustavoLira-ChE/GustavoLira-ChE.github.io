import React from 'react';
import styled from 'styled-components/macro';
import Welcome from '../pages/Welcome';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from '../containers/Header';
import ProjectPage from '../pages/ProjectPage';
import Footer from '../containers/Footer';
import Page404 from '../pages/Page404';
import Layout from '../containers/Layout';


const App = () => {
    return (
        <Wrappper>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Welcome />} />
                        <Route path="projects" element={<ProjectPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </Wrappper>
    );
};


const Wrappper = styled.div`
    height: fit-content;
`;


export default App;