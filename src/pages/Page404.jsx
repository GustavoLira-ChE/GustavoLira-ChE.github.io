import React from 'react';
import styled from 'styled-components/macro';
import { VscTelescope } from "react-icons/vsc";

const Page404 = () => {
    return (
        <ErrorPageWrapper>
            <h2>Looks like this page is missing <strong>:\</strong></h2>
            <TbError404Styled />
        </ErrorPageWrapper>
    );
};

const ErrorPageWrapper = styled.div`
  height: 90vh;
  display: grid;
  place-content: center;
  color: var(--color-black);
`
const TbError404Styled =  styled(VscTelescope)`
  font-size: 4rem;
  color: inherit;
  align-self: center;
`

export default Page404;