import React from 'react'
import styled from 'styled-components'

import Navigation from './Navigation'
import Preferences from './Preferences'
import Help from './Help'

const Footer = styled.footer`
  padding-top: 2rem;
  padding-right: .5rem;
  padding-bottom: 2rem;
  padding-left: .5rem;
  background-color: #f3f3f3;
  @media screen and (min-width: 48rem) {
    padding-right: 0;
    padding-left: 0;
  }
  @media screen and (min-width: 62rem) {
    margin-bottom: 1rem;
    padding: 4rem .5rem;
  }
`
const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 48rem) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export default () =>
  <Footer>
    <div className="container">
      <Wrapper>
        <Navigation />
        <Preferences />
        <Help />
      </Wrapper>
    </div>
  </Footer>
