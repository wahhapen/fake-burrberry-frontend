import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Gallery from './Gallery'
import Details from './Details'
import Description from './Description'
import Parts from './Parts'
import Delivery from './Delivery'
import Suggestions from './Suggestions'

const Wrapper = styled.section`
  @media screen and (min-width: 48rem) {
    padding-bottom: calc(1.5rem + 1px);
  }
  @media screen and (min-width: 62rem) {
    padding-bottom: 0;
    background: #d4bdad;
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
  @media screen and (min-width: 62rem) {
    display: none;
  }
`
const FeaturedImage = styled.img`
  display: block;
  margin: 0;
  position: inherit;
  height: 40rem;
  width: auto;
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
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
          <div className="col-xs-12 col-md-7 col-lg-6">
            <Gallery />
            <FeaturedImage
              src={`${process.env.PUBLIC_URL}/assets/gabardine-coat-1.jpg`}
              srcSet={`
                    ${process.env.PUBLIC_URL}/assets/gabardine-coat-1@2x.jpg 2x,
                    ${process.env.PUBLIC_URL}/assets/gabardine-coat-1@3x.jpg 3x`}
              alt="Long Cotton Gabardine Car Coat, Front"
            />
          </div>
          <div className="col-xs-12 col-md-5 col-lg-6">
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
    <Parts />
    <Delivery />
    <Suggestions />
  </main>
