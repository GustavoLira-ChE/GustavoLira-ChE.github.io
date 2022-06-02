import React from 'react';
import ProjectCard from '../components/ProjectCard';
import data from "../projectData";
import styled from 'styled-components/macro';

const ProjectList = () => {
    return (
        <ProjectListWrapper>
            <ProjectListContainer>
                {data.map(dataCard => (
                    <ProjectCard data={dataCard} key={dataCard.id}/>
                ))}
            </ProjectListContainer>
        </ProjectListWrapper>
    );
};

const ProjectListWrapper = styled.section`
  background-color: var(--color-white);
  padding: 32px 16px;
`
const ProjectListContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  max-width: 900px;
  margin: auto;
`

export default ProjectList;