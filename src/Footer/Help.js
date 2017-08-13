import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  padding-top: 1.5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`
const Title = styled.h4`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.1875rem;
`
const Link = styled.a`
  font-family: 'Lora', serif;
  font-size: .875rem;
  font-style: italic;
  line-height: 1.0625rem;
  color: #171717;
  &:hover {
    text-decoration: underline;
  }
`
export default () =>
  <Section>
    <Title>Need help?</Title>
    <Link href="link">Find out more and contact us</Link>
  </Section>
