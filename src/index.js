import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { persistStore } from 'redux-persist'
import 'reset.css'
import 'flex-layouts/lib/flex-layouts.css'
import configureStore from './app/store/configureStore'
import Root from './app/containers/Root'
import './index.css'


const history = createHistory()
const store = configureStore({}, history)
const persistor = persistStore(store)

render(
  <Root store={store} history={history} persistor={persistor} />,
  document.getElementById('avisits-container'),
)

if (module.hot) {
  module.hot.accept('./app/containers/Root', () => {
    render(
      <Root store={store} history={history} persistor={persistor} />,
      document.getElementById('avisits-container'),
    )
  })
}
