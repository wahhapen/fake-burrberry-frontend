import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Header = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  @media screen and (min-width: 62rem) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: none;
  }
`;
const HeaderLink = styled.a`
  line-height: 10px;
  @media screen and (min-width: 62rem) {
    line-height: 16px;
  }
`;
const Logo = styled.img`
  height: 10px;
  @media screen and (min-width: 62rem) {
    height: 16px;
  }
`;

export default () =>
  (<Header>
    <HeaderLink href="/">
      <Logo src={logo} alt="Burberry" />
    </HeaderLink>
  </Header>);
