import React from 'react';
import styled from 'styled-components/macro';
import About from '../components/About';
import MainContent from '../containers/MainContent';

const Welcome = () => {
    return (
        <PageWrapper>
            <MainContent />
            <About />
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
`

export default Welcome;