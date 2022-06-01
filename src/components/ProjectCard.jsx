import React from 'react';
import styled from 'styled-components/macro';

const ProjectCard = ( { data } ) => {
    return (
        <CardWrapper>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>{data.technologies}</p>
            <LinkRepo>
                <CardLink href={data.pageLink}>Page Link</CardLink>
                <CardLink href={data.gitHubRepo}>GitHub Link</CardLink>
            </LinkRepo>
        </CardWrapper>
    );
};

const CardWrapper = styled.article`
  padding: 16px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 8px;
`
const LinkRepo = styled.div`
  display: flex;
  justify-content: space-between;
`
const CardLink = styled.a`
  text-decoration: none;
  color: var(--color-white);
`

export default ProjectCard;