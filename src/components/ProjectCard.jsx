import React from 'react';
import styled from 'styled-components/macro';
import { GoRepo } from "react-icons/go";

const ProjectCard = ( { data } ) => {
    return (
        <CardWrapper>
            <TitleCard>{data.title}</TitleCard>
            <p>{data.description}</p>
            <p><strong>Build it with:</strong> {data.technologies}</p>
            <LinkRepo>
                <CardLink href={data.pageLink} target="_blank">Page Link</CardLink>
                <CardLink href={data.gitHubRepo} target="_blank"><GoRepoStyled /></CardLink>
            </LinkRepo>
        </CardWrapper>
    );
};

const CardWrapper = styled.article`
  padding: 16px;
  background-color: var(--color-secondary);
  color: var(--color-white);
  border-radius: 40px 4px 4px 4px;
  -webkit-box-shadow: 6px 7px 26px -6px rgba(32,64,117,0.98);
  -moz-box-shadow: 6px 7px 26px -6px rgba(32,64,117,0.98);
  box-shadow: 6px 7px 26px -6px rgba(32,64,117,0.98);
`
const TitleCard = styled.h3`
  text-align: center;
  text-decoration: underline;
`
const LinkRepo = styled.div`
  display: flex;
  justify-content: space-between;
`
const CardLink = styled.a`
  text-decoration: none;
  color: var(--color-white);
`
const GoRepoStyled = styled(GoRepo)`
  font-size: 1.5rem;
`

export default ProjectCard;