import React from 'react'
import styled from 'styled-components'

const Gallery = styled.section`
  display: flex;
  overflow-x: scroll;
  height: 25rem;
  @media screen and (min-width: 48rem) {
    height: 36rem;
  }
`

const Photo = styled.img`
  display: block;
  width: 300px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
  @media screen and (min-width: 48rem) {
    width: auto;
    height: 36rem;
  }
`

export default () =>
  <Gallery>
    <Photo
      src={`${process.env.PUBLIC_URL}/assets/gabardine-coat-1.jpg`}
      srcSet={`
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-1@2x.jpg 2x,
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-1@3x.jpg 3x`}
      alt="Long Cotton Gabardine Car Coat, Front"
    />
    <Photo
      src={`${process.env.PUBLIC_URL}/assets/gabardine-coat-2.jpg`}
      srcSet={`
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-2@2x.jpg 2x,
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-2@3x.jpg 3x`}
      alt="Long Cotton Gabardine Car Coat, Sleeves"
    />
    <Photo
      src={`${process.env.PUBLIC_URL}/assets/gabardine-coat-3.jpg`}
      srcSet={`
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-3@2x.jpg 2x,
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-3@3x.jpg 3x`}
      alt="Long Cotton Gabardine Car Coat, Collar"
    />
    <Photo
      src={`${process.env.PUBLIC_URL}/assets/gabardine-coat-4.jpg`}
      srcSet={`
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-4@2x.jpg 2x,
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-4@3x.jpg 3x`}
      alt="Long Cotton Gabardine Car Coat, Back"
    />
    <Photo
      src={`${process.env.PUBLIC_URL}/assets/gabardine-coat-5.jpg`}
      srcSet={`
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-5@2x.jpg 2x,
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-5@3x.jpg 3x`}
      alt="Long Cotton Gabardine Car Coat, Collar"
    />
  </Gallery>
