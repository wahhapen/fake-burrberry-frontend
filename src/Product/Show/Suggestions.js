import React from 'react'
import styled from 'styled-components'
import Similar from './Similar'

import { FormattedNumber } from 'react-intl'

const Section = styled.section`
  padding-top: 3.0625rem;
  padding-bottom: 4rem;
  @media screen and (min-width: 48rem) {
    padding-top: 1.25rem;
    padding-bottom: 2rem;
  }
`

const Heading = styled.h2`
  margin: 0;
  margin-right: .5rem;
  margin-left: .5rem;
  padding-bottom: .5rem;
  display: inline-block;
  vertical-align: middle;
  border-bottom: solid 1px #171717;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: normal;
  text-transform: uppercase;
  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`

const Cards = styled.div`
  padding-top: 1.5rem;
  padding-right: .5rem;
  padding-bottom: 1.875rem;
  padding-left: .5rem;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 48rem) {
    padding-top: 1rem;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
  }
`

const Card = styled.a`
  margin-bottom: 2rem;
  display: block;
  text-decoration: none;
`

const Photo = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
`

const Name = styled.h3`
  margin-top: .5rem;
  margin-bottom: .5rem;
  font-family: 'Lora', serif;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: normal;
  color: #111111;
`

const Price = styled.h4`
  margin: 0;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: normal;
  color: #999;
`

const recommendations = [
  {
    id: 'rec-1',
    name: 'Emroided Hooded',
    price: 27000,
    href: '/emroided-hooded'
  },
  {
    id: 'rec-2',
    name: 'Relaxed Fit Stretch Jeans',
    price: 22500,
    href: '/relaxed-fit-stretch-jeans'
  },
  {
    id: 'rec-3',
    name: 'Leather and House',
    price: 120000,
    href: '/leather-and-house'
  },
  {
    id: 'rec-4',
    name: 'Leather Wingtip',
    price: 46000,
    href: '/leather-wingtip'
  }
]

export default () =>
  <Section>
    <div className="container">
      <Heading>we recommend</Heading>
      <Cards>
        <div className="row">
          {recommendations.map(item =>
            <div className="col-xs-6 col-md-3" key={item.id}>
              <Card href={item.href}>
                <Photo src={`${process.env.PUBLIC_URL}/assets/${item.id}.jpg`} alt={item.name} />
                <Name>
                  {item.name}
                </Name>
                <Price>
                  <FormattedNumber value={item.price} style="currency" currency="RUB" />
                </Price>
              </Card>
            </div>
          )}
        </div>
      </Cards>
      <Similar />
    </div>
  </Section>
