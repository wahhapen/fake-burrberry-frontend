import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import './App.css';
import Header from './Header';
import Footer from './Footer';
import Product from './Product/Show';

addLocaleData([...en, ...ru]);

export default () =>
  (<IntlProvider locale={navigator.language}>
    <div>
      <Header />
      <Product />
      <Footer />
    </div>
  </IntlProvider>);
