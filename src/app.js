
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import './base.css'
import Routes from './routes'
import configureStore from './store'

const store = configureStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App
