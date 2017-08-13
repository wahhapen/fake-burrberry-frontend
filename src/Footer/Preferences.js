import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  border: none;
  font-size: .75rem;
  line-height: 1rem;
  color: #999;
  background-color: transparent;
  appearance: none;
  &:not(:last-of-type) {
    margin-bottom: .9rem;
  }
  @media screen and (min-width: 48rem) {
    &:not(:last-of-type) {
      margin-bottom: 0;
      margin-right: 1.5rem;
    }
  }
`

export default () =>
  <div>
    <Button type="button">Shipping country: Russian Federation</Button>
    <Button type="button">Language: English</Button>
  </div>
