
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import Test from './views/Test'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/test' component={Test} />
    </Switch>
  </BrowserRouter>
)
