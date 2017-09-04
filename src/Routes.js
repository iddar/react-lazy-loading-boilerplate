
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import asyncRoute from './asyncRoute'
const Home = asyncRoute(() => import('./views/Home'))
const Test = asyncRoute(() => import('./views/Test'), () => import('./reducers/bio'), './reducers/bio')

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/test' component={Test} />
    </Switch>
  </BrowserRouter>
)
