import React from 'react';
import styled from "styled-components/macro"

const MainContent = () => {
    return (
        <MainContentWrapper>
            <WelcomeWrapper>
                <p>Hello I'm Gustavo </p>
                <p>a <strong>software developer</strong> and chemical engineer.</p>
            </WelcomeWrapper>
        </MainContentWrapper>
    );
};

const MainContentWrapper = styled.div`
  height: 90vh;
  background-color: var(--color-primary);
  display: grid;
  place-content: center;
`
const WelcomeWrapper = styled.div`
  color: var(--color-white);
  text-align: center;
  font-size: 2em;

  & strong {
      color: var(--color-secondary);
  }
`

export default MainContent;