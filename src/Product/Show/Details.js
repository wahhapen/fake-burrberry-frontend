import React from 'react'
import styled from 'styled-components'

import { FormattedNumber } from 'react-intl'

import Colors from './Colors'
import Actions from './Actions'

const Pricing = styled.div`
  padding-top: 1rem;
  padding-left: .5rem;
  padding-right: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 48rem) {
    padding-top: 0;
    padding-right: 0;
    padding-left: 0;
  }
`
const Price = styled.h2`
  margin: 0;
  color: #111;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.1875rem;
`
const Id = styled.p`
  margin: 0;
  font-size: .75rem;
  line-height: 1rem;
`

export default () =>
  <div>
    <Pricing>
      <Price>
        <FormattedNumber value={110000} style="currency" currency="RUB" />
      </Price>
      <Id>Item 39428531</Id>
    </Pricing>
    <Colors />
    <Actions />
  </div>
