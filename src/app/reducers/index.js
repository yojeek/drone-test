import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import security from './security'
import user from './user'
import profile from './profile'
import auth from '../pages/auth/reducers'
import users from '../pages/settings/users/reducers'
import settings from '../pages/settings/settings/reducers'

export default combineReducers({
  router,
  security,
  user,
  profile,
  auth,
  users,
  settings,
})
