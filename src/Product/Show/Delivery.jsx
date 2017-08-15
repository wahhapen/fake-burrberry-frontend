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
  border-bottom: ${props => (props.isOpened ? 'none' : '1px solid #c6c6c6')};
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
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: ${props => (props.isOpened ? 'block' : 'none')};
  @media screen and (min-width: 48rem) {
    display: block;
  }
`;
const Term = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
`;
const Title = styled.h3`
  margin: 0;
  margin-bottom: .25rem;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: bold;
`;
const Text = styled.p`
  margin: 0;
  font-size: .75rem;
  line-height: 1rem;
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

class Delivery extends Component {
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
      <section className="container">
        <div className="row">
          <div className="col-xs-12 col-md-7 last-xs">
            <Image
              isOpened={this.state.isOpened}
              src={`${process.env.PUBLIC_URL}/assets/delivery-box.jpg`}
              srcSet={`${process.env.PUBLIC_URL}/assets/delivery-box@2x.jpg 2x, 
              ${process.env.PUBLIC_URL}/assets/delivery-box@3x.jpg 3x`}
              alt="Delivery present box"
            />
          </div>

          <div className="col-xs-12 col-md-5 last-md">
            <div className="product-delivery-wrapper">
              <Header onClick={this.handleClick}>
                <Heading isOpened={this.state.isOpened}>Delivery</Heading>
              </Header>
              <Content isOpened={this.state.isOpened}>
                <Term>
                  <Title>Free Next Day Delivery</Title>
                  <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>
                </Term>
                <Term>
                  <Title>Collect-in-Store</Title>
                  <Text>
                    Order online today and pick up your items in store as early as tomorrow
                  </Text>
                </Term>
                <Term>
                  <Title>Free Returns</Title>
                  <Text>Enjoy free returns on your order</Text>
                </Term>
                <Term>
                  <Title>Free Gift Packaging</Title>
                  <Text>
                    Discover our gift packaging, a gold lined box tied with a coloured ribbon
                  </Text>
                </Term>
              </Content>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Delivery.propTypes = {
  isOpened: PropTypes.bool.isRequired,
};

export default Delivery;
