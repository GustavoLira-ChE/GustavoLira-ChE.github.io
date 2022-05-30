import React from 'react';
import styled from 'styled-components/macro';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import MainContent from '../containers/MainContent';

const Welcome = () => {
    return (
        <PageWrapper>
            <Header />
            <MainContent />
            <Footer />
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
`

export default Welcome;