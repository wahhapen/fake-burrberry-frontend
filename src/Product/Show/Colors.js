import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding-top: 1rem;
  padding-right: .5rem;
  padding-bottom: 2rem;
  padding-left: .5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    padding-right: 0;
    padding-left: 0;
  }
`
const SelectedColor = styled.div`
  margin: 0;
  font-size: .75rem;
  line-height: 1rem;
`

const Value = styled.strong`font-size: .75rem;`

const Buttons = styled.div`
  padding-top: 1rem;
  display: flex;
`
const Button = styled.button`
  padding: calc(1.25rem - 1px);
  box-sizing: border-box;
  border: none;
  font-size: 0;
  line-height: 0;
  color: transparent;
  background-color: ${props => (props.color ? props.color : 'transparent')};
  border-radius: 50%;
  border: solid 1px ${props => (props.active ? '#232122' : 'transparent')};
  appearance: none;
  cursor: pointer;
  overflow: hidden;
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`

export default () =>
  <Section>
    <SelectedColor>
      Colour: <Value>Honey</Value>
    </SelectedColor>
    <Buttons>
      <Button color="black" type="button" name="black">
        Select black color
      </Button>
      <Button active color="#cfa880" type="button" name="honey">
        Select honey color
      </Button>
    </Buttons>
  </Section>
