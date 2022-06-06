import React from 'react';
import styled from 'styled-components/macro';

const BlogPage = () => {
    return (
        <BlogWrapper>
            <h1>Here is gonna be my blog</h1>
        </BlogWrapper>
    );
};

const BlogWrapper = styled.div`
  min-height: 90vh;
  display: grid;
  place-content: center;
`
export default BlogPage;