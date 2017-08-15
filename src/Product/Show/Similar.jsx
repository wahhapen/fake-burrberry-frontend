import React from 'react';
import styled from 'styled-components';

const Section = styled.section`@media screen and (min-width: 48rem) {display: none;}`;
const Heading = styled.h2`
  margin: 0;
  padding-top: 1rem;
  font-size: 1rem;
  padding-bottom: .5rem;
  display: inline-block;
  vertical-align: middle;
  border-bottom: solid 1px #171717;
  font-weight: normal;
  text-transform: uppercase;
`;
const Wrapper = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;
const Link = styled.a`
  font-family: 'Lora', serif;
  font-size: 14px;
  font-style: italic;
  text-decoration: none;
  line-height: 1.0625rem;
  color: #171717;
  &:not(:last-of-type) {
    padding-bottom: 1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export default () =>
  (<Section>
    <Heading>more for you</Heading>
    <Wrapper>
      <Link href="link">Men’s Black Trench Coats</Link>
      <Link href="link">Men’s Short Trench Coats</Link>
      <Link href="link">Men’s Long Trench Coats</Link>
    </Wrapper>
  </Section>);
