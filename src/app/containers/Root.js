import React from 'react'
import { PersistGate } from 'redux-persist/es/integration/react'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Preload from './Preload'
import Routes from './Routes'

const Root = ({ store, history, persistor }) => (
  <AppContainer>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Preload
          history={history}
          store={store}
        >
          <ConnectedRouter history={history}>
            <Routes store={store} />
          </ConnectedRouter>
        </Preload>
      </PersistGate>
    </Provider>
  </AppContainer>
)

export default hot(module)(Root)
