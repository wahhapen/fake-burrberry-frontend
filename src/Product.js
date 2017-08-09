import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import './Product.css'
import logo from './logo.svg'

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
          <meta
            name="description"
            content="Long Cotton Gabardine refined car coat crafted in protective cotton gabardine. Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain."
          />
        </Helmet>
        <header className="header">
          <a className="logo" href="/" title="Burberry">
            <img className="logo-img" src={logo} alt="Burberry" />
          </a>
        </header>
        <main className="product">
          <section className="product-info ">
            <div className="container">
              <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>
              <div className="row">
                <div className="col-xs-12 col-md-7">
                  <div className="product-gallery">
                    <img
                      className="product-photo"
                      src="./assets/gabardine-coat-1.jpg"
                      srcSet="./assets/gabardine-coat-1@2x.jpg 2x, ./assets/gabardine-coat-1@3x.jpg 3x"
                      alt="Long Cotton Gabardine Car Coat, Front"
                    />
                    <img
                      className="product-photo"
                      src="/assets/gabardine-coat-2.jpg"
                      srcSet="/assets/gabardine-coat-2@2x.jpg 2x, /assets/gabardine-coat-2@3x.jpg 3x"
                      alt="Long Cotton Gabardine Car Coat, Sleeves"
                    />
                    <img
                      className="product-photo"
                      src="/assets/gabardine-coat-3.jpg"
                      srcSet="/assets/gabardine-coat-3@2x.jpg 2x, /assets/gabardine-coat-3@3x.jpg 3x"
                      alt="Long Cotton Gabardine Car Coat, Collar"
                    />
                    <img
                      className="product-photo"
                      src="/assets/gabardine-coat-4.jpg"
                      srcSet="/assets/gabardine-coat-4@2x.jpg 2x, /assets/gabardine-coat-4@3x.jpg 3x"
                      alt="Long Cotton Gabardine Car Coat, Back"
                    />
                    <img
                      className="product-photo"
                      src="/assets/gabardine-coat-5.jpg"
                      srcSet="/assets/gabardine-coat-5@2x.jpg 2x, /assets/gabardine-coat-5@3x.jpg 3x"
                      alt="Long Cotton Gabardine Car Coat, Collar"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-md-5">
                  <section className="product-info-wrapper">
                    <h2 className="product-info-title">110 000 руб.</h2>
                    <p className="product-info-text">Item 39428531</p>
                  </section>
                  <section className="product-color-wrapper">
                    <p className="product-color-name">
                      Colour: <span className="color-name-current">Honey</span>
                    </p>
                    <div className="product-color-pallete">
                      <button className="product-color product-color--black" type="button">
                        Black
                      </button>
                      <button
                        className="product-color product-color--honey product-color--current"
                        type="button"
                      >
                        Honey
                      </button>
                    </div>
                  </section>
                  <section className="product-actions">
                    <button
                      className="product-actions-button product-actions-button--active"
                      type="button"
                    >
                      Select a size
                    </button>
                    <button className="product-actions-button" type="button">
                      Find in store
                    </button>
                    <button
                      className="product-actions-button product-actions-button--secondary"
                      type="button"
                    >
                      Need size help?
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section className="product-properties product-properties--opened">
            <div className="container">
              <button className="product-properties-button" type="button">
                <h2 className="product-properties-title">Description</h2>
              </button>
              <div className="product-properties-content">
                <p>A refined car coat crafted in protective cotton gabardine.</p>
                <p>
                  Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and
                  breathable fabric that protects against wind and rain.
                </p>
                <p>
                  Raglan sleeves and a concealed button closure complement the clean tailored lines.
                </p>
                <p>The piece is finished with a distinctive check undercollar.</p>
                <br />
                <ul>
                  <li>
                    Coat length: 98cm/38.6in. This is&nbsp;based on a&nbsp;size UK&nbsp;48&nbsp;as
                    proportions change slightly according to&nbsp;size.
                  </li>
                  <li>Outer: 100% cotton</li>
                  <li>Check lining: 100% cotton</li>
                  <li>Sleeve lining: 100% viscose</li>
                  <li>Buttons: buffalo horn</li>
                  <li>Specialist dry clean</li>
                  <li>Made in&nbsp;Europe</li>
                  <li>Item 39428531</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="product-properties product-delivery  product-properties--closed">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-7 last-xs">
                  <div className="product-delivery-photo-wrapper">
                    <img
                      className="product-delivery-photo"
                      src="/assets/delivery-box.jpg"
                      srcSet="/assets/delivery-box@2x.jpg 2x, /assets/delivery-box@3x.jpg 3x"
                      alt="Delivery present box"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-md-5 last-md">
                  <div className="product-delivery-wrapper">
                    <button className="product-properties-button" type="button">
                      <h2 className="product-delivery-title product-properties-title">Delivery</h2>
                    </button>
                    <div className="product-properties-content">
                      <div className="product-delivery-description">
                        <h3 className="product-delivery-description-title">
                          Free Next Day Delivery
                        </h3>
                        <p className="product-delivery-description-text">
                          Order before 7pm Monday to Thursday for delivery the next day
                        </p>
                      </div>
                      <div className="product-delivery-description">
                        <h3 className="product-delivery-description-title">Collect-in-Store</h3>
                        <p className="product-delivery-description-text">
                          Order online today and pick up your items in store as early as tomorrow
                        </p>
                      </div>
                      <div className="product-delivery-description">
                        <h3 className="product-delivery-description-title">Free Returns</h3>
                        <p className="product-delivery-description-text">
                          Enjoy free returns on your order
                        </p>
                      </div>
                      <div className="product-delivery-description">
                        <h3 className="product-delivery-description-title">Free Gift Packaging</h3>
                        <p className="product-delivery-description-text">
                          Discover our gift packaging, a gold lined box tied with a coloured ribbon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="product-recommended">
            <div className="container">
              <h2 className="product-recommended-title">We recommend</h2>
              <div className="product-recommended-list">
                <div className="row">
                  <div className="col-xs-6 col-md-3">
                    <a className="product-recommended-link" href="link">
                      <img
                        className="product-recommended-photo"
                        src="/assets/rec-1.jpg"
                        alt="Emroided Hooded"
                      />
                      <h3 className="product-recommended-name">
                        Emroided Hooded Content For Three Lines
                      </h3>
                      <h5 className="product-recommended-price">27 000 руб.</h5>
                    </a>
                  </div>
                  <div className="col-xs-6 col-md-3">
                    <a className="product-recommended-link" href="link">
                      <img
                        className="product-recommended-photo"
                        src="/assets/rec-2.jpg"
                        alt="Relaxed Fit Stretch Jeans"
                      />
                      <h3 className="product-recommended-name">Relaxed Fit Stretch Jeans</h3>
                      <h5 className="product-recommended-price">22 500 руб.</h5>
                    </a>
                  </div>
                  <div className="col-xs-6 col-md-3">
                    <a className="product-recommended-link" href="link">
                      <img
                        className="product-recommended-photo"
                        src="/assets/rec-3.jpg"
                        alt="Leather and House Check"
                      />
                      <h3 className="product-recommended-name">Leather and House Check</h3>
                      <h5 className="product-recommended-price">120 000 руб.</h5>
                    </a>
                  </div>
                  <div className="col-xs-6 col-md-3">
                    <a className="product-recommended-link" href="link">
                      <img
                        className="product-recommended-photo"
                        src="/assets/rec-4.jpg"
                        alt="Leather Wingtip Check"
                      />
                      <h3 className="product-recommended-name">Leather Wingtip Check</h3>
                      <h5 className="product-recommended-price">46 000 руб.</h5>
                    </a>
                  </div>
                </div>
              </div>
              <section className="product-more">
                <div className="container">
                  <h2 className="product-more-title">More For you</h2>
                  <div className="product-more-list">
                    <a href="link" className="product-more-link">
                      Men’s Black Trench Coats
                    </a>
                    <a href="link" className="product-more-link">
                      Men’s Short Trench Coats
                    </a>
                    <a href="link" className="product-more-link">
                      Men’s Long Trench Coats
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="footer-wrapper">
              <div className="footer-menu">
                <div className="row">
                  <div className="col-md-3">
                    <h4 className="footer-menu-title">Customer service</h4>
                    <nav className="footer-menu-list">
                      <a className="footer-menu-link" href="link">
                        Contact Us
                      </a>
                      <a className="footer-menu-link" href="link">
                        Payment
                      </a>
                      <a className="footer-menu-link" href="link">
                        Shipping
                      </a>
                      <a className="footer-menu-link" href="link">
                        Returns
                      </a>
                      <a className="footer-menu-link" href="link">
                        Faqs
                      </a>
                      <a className="footer-menu-link" href="link">
                        Live Chat
                      </a>
                      <a className="footer-menu-link" href="link">
                        The Burberry App
                      </a>
                      <a className="footer-menu-link" href="link">
                        Store Locator
                      </a>
                    </nav>
                  </div>
                  <div className="col-md-3">
                    <h4 className="footer-menu-title">Our company</h4>
                    <nav className="footer-menu-list">
                      <a className="footer-menu-link" href="link">
                        Our History
                      </a>
                      <a className="footer-menu-link" href="link">
                        Burberry Group Pic
                      </a>
                      <a className="footer-menu-link" href="link">
                        Careers
                      </a>
                      <a className="footer-menu-link" href="link">
                        Corporate Responsibility
                      </a>
                      <a className="footer-menu-link" href="link">
                        Site Map
                      </a>
                    </nav>
                  </div>
                  <div className="col-md-3">
                    <h4 className="footer-menu-title">Legal &amp; cookies</h4>
                    <nav className="footer-menu-list">
                      <a className="footer-menu-link" href="link">
                        Terms &amp; Conditions
                      </a>
                      <a className="footer-menu-link" href="link">
                        Privacy Policy
                      </a>
                      <a className="footer-menu-link" href="link">
                        Cookie Policy
                      </a>
                      <a className="footer-menu-link" href="link">
                        Accessibility Statement
                      </a>
                      <a className="footer-menu-link" href="link">
                        Japan Only - SCTL indications
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <button className="footer-button" type="button">
                Shipping country: Russian Federation
              </button>
              <button className="footer-button" type="button">
                Language: English
              </button>
              <div className="footer-help-wrapper">
                <h4 className="footer-help-title">Need help?</h4>
                <a className="footer-help-link" href="link">
                  Find out more and contact us
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Product
