import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'flexboxgrid2/dist/flexboxgrid.css'
import { IntlProvider } from 'react-intl'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>,
  document.getElementById('root')
)
registerServiceWorker()
