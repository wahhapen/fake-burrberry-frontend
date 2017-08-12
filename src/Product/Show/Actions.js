import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  padding-top: 2rem;
  padding-right: .5rem;
  padding-bottom: 2.5rem;
  padding-left: .5rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 48rem) {
    padding-right: 0;
    padding-left: 0;
  }
`
const Button = styled.button`
  padding-top: .9375rem;
  margin-bottom: 1rem;
  padding-bottom: .9375rem;
  width: 100%;
  border: solid 1px;
  border-radius: 2px;
  font-size: .75rem;
  line-height: 1rem;
  text-align: center;
  text-transform: uppercase;
  background-color: ${props => (props.active ? '#171717;' : '#fff')};
  border-color: ${props => (props.active ? '#171717;' : '#999')};
  appearance: none;
  color: ${props => (props.active ? '#fff' : '#171717')};
  &:active {
    background-color: ${props => (props.active ? '#666;' : '#eee')};
    color: ${props => (props.active ? '#fff' : '#171717')};
  }
`
const HelpButton = styled.button`
  margin-bottom: 0;
  padding-top: .5rem;
  padding-right: 0;
  padding-bottom: .5rem;
  padding-left: 0;
  display: inline-block;
  width: auto;
  border: none;
  background-color: transparent;
  font-size: .75rem;
  line-height: 1rem;
  text-transform: uppercase;
  text-align: left;
  appearance: none;
  &:active {
    color: #666;
  }
`

export default () =>
  <Section>
    <Button active type="button">
      select a size
    </Button>
    <Button type="button">find in store</Button>
    <HelpButton type="button">need size help?</HelpButton>
  </Section>
