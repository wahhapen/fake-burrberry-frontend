import React from 'react';
import styled from 'styled-components';

import { FormattedNumber } from 'react-intl';

import Colors from './Colors';
import Actions from './Actions';
import Sizes from './Sizes';

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
`;
const Price = styled.h2`
  margin: 0;
  color: #111;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.1875rem;
`;
const Id = styled.p`
  margin: 0;
  font-size: .75rem;
  line-height: 1rem;
`;
const Name = styled.h1`
  display: none;
  margin: 0;
  padding: 10rem 0 .5rem 0;
  font-family: "Lora", serif;
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 400;
  color: #171717;

  @media screen and (min-width: 62rem) {
    display: block;
  }
`;
const Appearance = styled.div`
  @media screen and (min-width: 62rem) {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    display: flex;
  }
`;
const SupplyConditions = styled.div`
  display: none;
  @media (min-width: 62rem) {
    display: block;
    margin: 1.5rem 0 0 0;
  }
`;

const Caption = styled.h3`
  margin: 0 0 4px 0;
  font-size: .75rem;
  line-height: .875rem;
`;

const Content = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1rem;
`;

export default () =>
  (<div>
    <Name>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Name>
    <Pricing>
      <Price>
        <FormattedNumber value={110000} style="currency" currency="RUB" />
      </Price>
      <Id>Item 39428531</Id>
    </Pricing>
    <Appearance>
      <Colors />
      <Sizes />
    </Appearance>
    <Actions />
    <SupplyConditions>
      <Caption>Free Next Day Delivery</Caption>
      <Content>Order before 7pm Monday to Thursday for delivery the next day</Content>
    </SupplyConditions>
  </div>);
