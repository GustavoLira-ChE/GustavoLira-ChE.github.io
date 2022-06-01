import React from 'react';
import styled from 'styled-components/macro';
import { DiCss3, DiBootstrap, DiSass, DiReact, DiNodejsSmall, DiGit } from "react-icons/di";
import { SiStyledcomponents, SiJavascript, SiWebpack, SiExpress, SiJest } from "react-icons/si";
import { QUERIES } from '../constants';

const About = () => {
    return (
        <AboutWrapper>
          <AboutContainer>
            <BioSection>
                <p>
                    I'm a chemical engineer and have a Master's degree in Chemical Engineering. I've worked in the design, optimization, and control of chemical processes using AspenPlus.
                </p>
                <p>
                    Since I was at University I have loved to code. I started with Matlab, then I learned to code with Python.
                </p>
                <p>
                    Right now I'm working with web development technologies like HTML, CSS, JavaScript, I was accepted in a bootcamp organized by Innovaccion Virtual powered by Microsoft.
                </p>    
            </BioSection>
            <Technologies>
                <h2>Tecnologies that I use</h2>
                <ul>
                    <RelativeWrapper><DiCss3Styled /></RelativeWrapper>
                    <RelativeWrapper><DiBootstrapStyled /></RelativeWrapper>
                    <RelativeWrapper><DiSassStyled /></RelativeWrapper>
                    <RelativeWrapper><SiStyledcomponentsStyled /></RelativeWrapper>
                    <RelativeWrapper><SiJavascriptStyled /></RelativeWrapper>
                    <RelativeWrapper><DiReactStyled /></RelativeWrapper>
                    <RelativeWrapper><DiNodejsSmallStyled /></RelativeWrapper>
                    <RelativeWrapper><SiWebpackStyled /></RelativeWrapper>
                    <RelativeWrapper><SiExpressStyled /></RelativeWrapper>
                    <RelativeWrapper><SiJestStyled /></RelativeWrapper>
                    <RelativeWrapper><DiGitStyled /></RelativeWrapper>
                </ul>
            </Technologies>
          </AboutContainer>
        </AboutWrapper>
    );
};

const AboutWrapper = styled.div`
  background-color: var(--color-white);
  padding: 16px;
  height: 90vh;
  @media${QUERIES.phoneAndSmaller}{
    height: inherit;
  }
`
const AboutContainer = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media${QUERIES.tabletAndSmaller}{
    flex-direction: column;
  }
`
const BioSection = styled.article`
  padding: 16px;
  color: var(--color-gray);
  flex: 1;
  text-align: justify;
`

const Technologies = styled.article`
  padding: 16px;
  flex: 1;
  & ul{
      display: grid;
      gap: 8px;
      grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  }

`
const RelativeWrapper = styled.li`
  position: relative;
  width: 50px;
  height: 50px;
`

const DiCss3Styled = styled(DiCss3)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: var(--color-secondary);
`
const DiBootstrapStyled = styled(DiBootstrap)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: var(--color-secondary);
`
const DiSassStyled = styled(DiSass)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: var(--color-secondary);
`
const DiReactStyled = styled(DiReact)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: var(--color-secondary);
`
const DiNodejsSmallStyled = styled(DiNodejsSmall)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: var(--color-secondary);
`
const DiGitStyled = styled(DiGit)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: var(--color-secondary);
`
const SiStyledcomponentsStyled = styled(SiStyledcomponents)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: var(--color-secondary);
`
const SiJavascriptStyled = styled(SiJavascript)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: var(--color-secondary);
`
const SiWebpackStyled = styled(SiWebpack)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: var(--color-secondary);
`
const SiExpressStyled = styled(SiExpress)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: var(--color-secondary);
`
const SiJestStyled = styled(SiJest)`
  font-size: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: var(--color-secondary);
`

export default About;