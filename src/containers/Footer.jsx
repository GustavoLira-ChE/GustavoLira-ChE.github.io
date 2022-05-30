import React from "react";
import  styled from "styled-components/macro";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin, AiFillTwitterCircle, AiOutlineCodepenCircle } from "react-icons/ai";
import { QUERIES } from "../constants";

const Footer = () => {
    return (
        <FooterSection>
            <FooterWrapper>
                <h3>gu.lirar23@gmail.com</h3>
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
`
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media()
`
const IconList = styled.ul`
  display: flex;

`
const DiGithubBadgeStyle = styled(DiGithubBadge)`
  color: var(--color-gray);
  font-size: 3em;
`
const AiFillLinkedinStyle = styled(AiFillLinkedin)`
  color: var(--color-gray);
  font-size: 3em;
`
const AiFillTwitterCircleStyle = styled(AiFillTwitterCircle)`
  color: var(--color-gray);
  font-size: 3em;
` 
const AiOutlineCodepenCircleStyle = styled(AiOutlineCodepenCircle)`
  color: var(--color-gray);
  font-size: 3em;
`

export default Footer;