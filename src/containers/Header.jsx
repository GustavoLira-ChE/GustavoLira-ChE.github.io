import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderWrapper>
            <NavHeader>
                <ImageContainer>
                    <SuperHeroTitle>
                        <LinkStyled to="/">
                            {/* <img src="./assets/android-chrome-192x192.png" alt="" /> */}
                            Gustavo Lira
                        </LinkStyled>
                    </SuperHeroTitle>
                </ImageContainer>
                <UnorderList>
                    <div>
                        <ItemList>
                            <LinkStyled to="/projects">
                                Projects
                            </LinkStyled>
                        </ItemList>
                    </div>
                    <div>
                        <ItemList>
                            <LinkStyled to="/blog">
                                Blog
                            </LinkStyled>
                        </ItemList>
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
const SuperHeroTitle = styled.h1`
  text-decoration: none;
  color: var(--color-white);
  font-weight: 600;
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
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export default Header;