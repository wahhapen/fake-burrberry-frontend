import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'

const Header = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`
const HeaderLink = styled.a`line-height: 10px;`

export default () =>
  <Header>
    <HeaderLink href="/">
      <img src={logo} alt="Burberry" />
    </HeaderLink>
  </Header>
