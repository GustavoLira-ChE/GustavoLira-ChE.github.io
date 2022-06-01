import React from 'react';
import styled from 'styled-components/macro';
import About from '../components/About';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import MainContent from '../containers/MainContent';

const Welcome = () => {
    return (
        <PageWrapper>
            <Header />
            <MainContent />
            <About />
            <Footer />
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
`

export default Welcome;