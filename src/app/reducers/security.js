import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createReducer } from '../utils'
import * as actions from '../constants/security'

const initialState = {
  token: null,
  id: null,
  email: null,
  expiresIn: null,
}

const reducer = createReducer(initialState, {
  [actions.auth]: (state, { user }) => user,
  [actions.logout]: () => initialState,
})

export default persistReducer({
  storage,
  version: 1,
  key: 'security',
  blacklist: ['__typename', 'acl'],
}, reducer)
