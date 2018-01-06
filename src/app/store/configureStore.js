import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import api from './middleware/api'

export default function configureStore(initialState, history) {
  const enhancer = compose(
    applyMiddleware(routerMiddleware(history), api(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )

  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
