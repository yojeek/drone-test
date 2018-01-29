import React from 'react'
import { PersistGate } from 'redux-persist/es/integration/react'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Routes from './Routes'

const Root = ({ store, history, persistor }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <Routes store={store} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
)

export default hot(module)(Root)
