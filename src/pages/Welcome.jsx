import React from 'react';
import styled from 'styled-components/macro';
import About from '../components/About';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import MainContent from '../containers/MainContent';
import ProjectList from '../containers/ProjectList';

const Welcome = () => {
    return (
        <PageWrapper>
            <Header />
            <MainContent />
            <About />
            <ProjectList />
            <Footer />
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
`

export default Welcome;