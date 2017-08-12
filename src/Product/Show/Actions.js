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
  @media screen and (min-width: 62rem) {
    flex-direction: row;
    padding: 0;
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
  background-color: ${props => (props.active ? '#171717' : 'transparent')};
  border-color: ${props => (props.active ? '#171717' : '#999')};
  appearance: none;
  color: ${props => (props.active ? '#fff' : '#171717')};
  &:active {
    background-color: ${props => (props.active ? '#666;' : '#eee')};
    color: ${props => (props.active ? '#fff' : '#171717')};
  }
  @media screen and (min-width: 62rem) {
    border-color: #171717;
    display: ${props => (props.lgHidden ? 'none' : 'block')};
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
    &:active {
      background-color: ${props => (props.active ? '#333' : 'transparent')};
      border-color: #ccc;
    }
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
  @media screen and (min-width: 62rem) {
    display: none;
  }
`

export default () =>
  <Section>
    <Button lgHidden type="button">
      Select a size
    </Button>
    <Button active type="button">
      Add to bag
    </Button>
    <Button type="button">Find in store</Button>
    <HelpButton type="button">Need size help?</HelpButton>
  </Section>
