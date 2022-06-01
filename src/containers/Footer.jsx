import React from "react";
import  styled from "styled-components/macro";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin, AiFillTwitterCircle, AiOutlineCodepenCircle } from "react-icons/ai";
import { QUERIES } from "../constants"


const Footer = () => {
    return (
        <FooterSection>
            <FooterWrapper>
                <EmailSend href = "mailto: gu.lirar23@gmail.com">Send Email</EmailSend>
                <IconList>
                    <li>
                        <a href="https://github.com/GustavoLira-ChE" target="_blank">
                            <DiGithubBadgeStyle />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/gustavo-lira-a0497417b/" target="_blank">
                            <AiFillLinkedinStyle />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/GustavoLiReChE" target="_blank">
                            <AiFillTwitterCircleStyle />
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/gustavolira-che" target="_blank">
                            <AiOutlineCodepenCircleStyle />
                        </a>
                    </li>
                </IconList>
            </FooterWrapper>
        </FooterSection>
    );
};

const FooterSection = styled.footer`
  background-color: var(--color-black);
  color: var(--color-gray);
  padding: 16px;
  margin-top: 32px;
`
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: auto;
  @media ${QUERIES.phoneAndSmaller}{
    flex-direction: column;
  }
`
const EmailSend = styled.a`
  text-decoration: none;
  color: var(--color-gray);
  &:hover, &:focus{
    color: var(--color-white);
  }
`
const IconList = styled.ul`
  display: flex;

`
const DiGithubBadgeStyle = styled(DiGithubBadge)`
  color: var(--color-gray);
  font-size: 3em;
  &:hover, &:focus{
    color: var(--color-white);
  }
`
const AiFillLinkedinStyle = styled(AiFillLinkedin)`
  color: var(--color-gray);
  font-size: 3em;
  &:hover, &:focus{
    color: var(--color-white);
  }
`
const AiFillTwitterCircleStyle = styled(AiFillTwitterCircle)`
  color: var(--color-gray);
  font-size: 3em;
  &:hover, &:focus{
    color: var(--color-white);
  }
` 
const AiOutlineCodepenCircleStyle = styled(AiOutlineCodepenCircle)`
  color: var(--color-gray);
  font-size: 3em;
  &:hover, &:focus{
    color: var(--color-white);
  }
`

export default Footer;