import React from 'react'
import { render } from 'react-dom'
import { Settings as LuxonSettings } from 'luxon'
import createHistory from 'history/createBrowserHistory'
import { persistStore } from 'redux-persist'
import 'flex-layouts/lib/flex-layouts.css'
import configureStore from './app/store/configureStore'
import Root from './app/containers/Root'
import './index.css'

LuxonSettings.defaultLocale = 'ru'

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
