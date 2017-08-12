import React from 'react'
import styled, { css } from 'styled-components'

const Parts = styled.section`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
    margin: 4rem 0;
  }
`
const Part = styled.img`
  display: block;
  width: 100%;
  ${props => props.center && css`margin-top: 2rem;`};
  ${props => props.bottom && css`margin-top: 6rem;`};
`
export default () =>
  <Parts>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Part
            center
            src={`${process.env.PUBLIC_URL}/assets/gabardine-coat-3.jpg`}
            srcSet={`
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-3@2x.jpg 2x,
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-3@3x.jpg 3x`}
            alt="Long Cotton Gabardine Car Coat, Collar"
          />
        </div>
        <div className="col-lg-4">
          <Part
            bottom
            src={`${process.env.PUBLIC_URL}/assets/gabardine-coat-4.jpg`}
            srcSet={`
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-4@2x.jpg 2x,
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-4@3x.jpg 3x`}
            alt="Long Cotton Gabardine Car Coat, Back"
          />
        </div>
        <div className="col-lg-4">
          <Part
            src={`${process.env.PUBLIC_URL}/assets/gabardine-coat-5.jpg`}
            srcSet={`
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-5@2x.jpg 2x,
          ${process.env.PUBLIC_URL}/assets/gabardine-coat-5@3x.jpg 3x`}
            alt="Long Cotton Gabardine Car Coat, Collar"
          />
        </div>
      </div>
    </div>
  </Parts>
