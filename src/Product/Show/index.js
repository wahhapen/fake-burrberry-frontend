import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Gallery from './Gallery'
import Details from './Details'
import Description from './Description'
import Delivery from './Delivery'
import Suggestions from './Suggestions'

const Wrapper = styled.section`
  @media screen and (min-width: 48rem) {
    padding-bottom: calc(1.5rem + 1px);
  }
`
const Title = styled.h1`
  margin: 0;
  padding: 1rem .5rem;
  color: #111;
  font-family: 'Lora', serif;
  font-size: 1.25rem;
  font-weight: normal;
  line-height: 1.5rem;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`
export default () =>
  <main>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
      <meta
        name="description"
        content="Long Cotton Gabardine refined car coat crafted in protective cotton gabardine. Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain."
      />
    </Helmet>
    <Wrapper>
      <div className="container">
        <Title>Long Cotton Gabardine Car Coat</Title>
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <Gallery />
          </div>
          <div className="col-xs-12 col-md-5">
            <Details />
          </div>
        </div>
      </div>
    </Wrapper>
    <Description isOpened>
      <p>A refined car coat crafted in protective cotton gabardine.</p>
      <p>
        Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable
        fabric that protects against wind and rain.
      </p>
      <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
      <p>The piece is finished with a distinctive check undercollar.</p>
      <br />
      <ul>
        <li>
          Coat length: 98cm/38.6in. This is&nbsp;based on a&nbsp;size UK&nbsp;48&nbsp;as proportions
          change slightly according to&nbsp;size.
        </li>
        <li>Outer: 100% cotton</li>
        <li>Check lining: 100% cotton</li>
        <li>Sleeve lining: 100% viscose</li>
        <li>Buttons: buffalo horn</li>
        <li>Specialist dry clean</li>
        <li>Made in&nbsp;Europe</li>
        <li>Item 39428531</li>
      </ul>
    </Description>
    <Delivery />
    <Suggestions />
  </main>
