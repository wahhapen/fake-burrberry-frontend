import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  padding-bottom: 2rem;
  width: 100%;
  display: none;
  @media screen and (min-width: 48rem) {
    display: block;
  }
`
const Title = styled.h4`
  margin: 0;
  font-size: .75rem;
  line-height: .875rem;
  text-transform: uppercase;
`
const List = styled.nav`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
`
const Link = styled.a`
  font-size: .75rem;
  font-weight: 600;
  line-height: 1rem;
  text-decoration: none;
  color: #999;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-of-type) {
    margin-bottom: .75rem;
  }
`

export default () =>
  <Section>
    <div className="row">
      <div className="col-md-3">
        <Title>Customer service</Title>
        <List>
          <Link href="link">Contact Us</Link>
          <Link href="link">Payment</Link>
          <Link href="link">Shipping</Link>
          <Link href="link">Returns</Link>
          <Link href="link">Faqs</Link>
          <Link href="link">Live Chat</Link>
          <Link href="link">The Burberry App</Link>
          <Link href="link">Store Locator</Link>
        </List>
      </div>
      <div className="col-md-3">
        <Title>Our company</Title>
        <List>
          <Link href="link">Our History</Link>
          <Link href="link">Burberry Group Pic</Link>
          <Link href="link">Careers</Link>
          <Link href="link">Corporate Responsibility</Link>
          <Link href="link">Site Map</Link>
        </List>
      </div>
      <div className="col-md-3">
        <Title>Legal &amp; cookies</Title>
        <List>
          <Link href="link">Terms &amp; Conditions</Link>
          <Link href="link">Privacy Policy</Link>
          <Link href="link">Cookie Policy</Link>
          <Link href="link">Accessibility Statement</Link>
          <Link href="link">Japan Only - SCTL indications</Link>
        </List>
      </div>
    </div>
  </Section>
