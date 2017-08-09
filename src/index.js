import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'flexboxgrid2/dist/flexboxgrid.css'
import Product from './Product'
import registerServiceWorker from './registerServiceWorker'
ReactDOM.render(<Product />, document.getElementById('root'))
registerServiceWorker()
