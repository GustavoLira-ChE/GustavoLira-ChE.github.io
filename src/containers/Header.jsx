import React from 'react';
import styled from 'styled-components/macro';

const Header = () => {
    return (
        <HeaderWrapper>
            <NavHeader>
                <ImageContainer>
                    <img src="./assets/android-chrome-192x192.png" alt="" />
                </ImageContainer>
                <UnorderList>
                    <div>
                        <ItemList>Blog</ItemList>
                    </div>
                    <div>
                        <ItemList>Contact</ItemList>
                    </div>
                </UnorderList>
            </NavHeader>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 10vh;
  background-color: var(--color-primary);
  padding: 16px;
  z-index: 20;
`
const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: auto;
`
const ImageContainer = styled.div`
    align-self: center;
  & img {
      width: 40px;
      aspect-radio: 1/1;
  }
`
const UnorderList = styled.ul`
    display: flex;
    align-items: center;
    gap: 16px;
    color: var(--color-white);
    font-weight: 600;
    & div{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 40px;
    }
`

const ItemList = styled.li`
  position: absolute;

  &:hover{
      border: 2px solid var(--color-white);
      padding: 4px;
      border-radius: 5px;
  }
`

export default Header;