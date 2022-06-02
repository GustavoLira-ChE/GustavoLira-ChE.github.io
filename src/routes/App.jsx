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


const App = () => {
    return (
        <Wrappper>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index path="/" element={<Welcome />} />
                    <Route path="/projects" element={<ProjectPage />} />
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