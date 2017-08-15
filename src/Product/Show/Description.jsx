import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import triangle from './triangle.svg';

const Header = styled.button`
  position: relative;
  margin-right: -.5rem;
  margin-left: -.5rem;
  padding-top: 2rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  width: calc(100% + 1rem);
  border: none;
  border-top: 1px solid #c6c6c6;
  text-align: left;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
  &:before {
    position: absolute;
    top: 2rem;
    right: 1rem;
    content: url(${triangle});
    ${props => props.isOpened && css`transform: rotate(180deg);`};
  }
  @media screen and (min-width: 48rem) {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 1rem;
    line-height: 1.1875rem;
    text-transform: uppercase;
    font-weight: normal;
    border: none;
    cursor: default;
    &:before {
      content: normal;
    }
  }
`;
const Heading = styled.h2`
  margin: 0;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: normal;
  text-transform: uppercase;
`;
const Content = styled.div`
  margin-right: -.5rem;
  margin-left: -.5rem;
  padding-top: calc(1rem + 1px);
  padding-right: 1rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  font-family: 'Lora', serif;
  font-size: .875rem;
  line-height: 1.5rem;
  display: ${props => (props.isOpened ? 'block' : 'none')};
  p,
  ul {
    margin: 0;
    padding: 0 .5rem;
    list-style: none;
    @media screen and (min-width: 48rem) {
      padding: 0;
    }
  }
  @media screen and (min-width: 48rem) {
    margin: 0;
    padding-top: calc(1rem + 1px);
    padding-right: 0;
    padding-bottom: calc(1.5rem - 1px);
    padding-left: 0;
    display: block;
  }
`;
const Section = styled.section`@media screen and (min-width: 62rem) {margin-top: 4rem;}`;
const Photo = styled.img`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
    width: 100%;
  }
`;

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: this.props.isOpened,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <Section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-4">
              <Header onClick={this.handleClick}>
                <Heading isOpened={this.state.isOpened}>Description</Heading>
              </Header>
              <Content isOpened={this.state.isOpened}>
                {this.props.children}
              </Content>
            </div>
            <div className="col-lg-8">
              <Photo
                src={`${process.env.PUBLIC_URL}/assets/gabardine-coat-2.jpg`}
                srcSet={`
                  ${process.env.PUBLIC_URL}/assets/gabardine-coat-2@2x.jpg 2x,
                  ${process.env.PUBLIC_URL}/assets/gabardine-coat-2@3x.jpg 3x`}
                alt="Long Cotton Gabardine Car Coat, Sleeves"
              />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

Description.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Description;
