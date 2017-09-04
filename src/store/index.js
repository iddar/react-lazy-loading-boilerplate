
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

import Registry from './registry'
import registryMiddleware from './registry/middleware'

const logger = store => next => action => {
  console.log(action)
  return next(action)
}

export default function configure (initialState) {
  const registry = new Registry(rootReducer)

  let createStoreWithMiddleware = applyMiddleware(
    logger, thunk, registryMiddleware(registry)
  )

  // if we have redux devtools installed hook into it.
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    createStoreWithMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(createStoreWithMiddleware)
  }

  const store = createStoreWithMiddleware(createStore)(
    registry.initialReducers,
    initialState
  )

  registry.store = store

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      // registry.injectReducers(nextReducer)
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
