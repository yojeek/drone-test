import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import security from './security'
import networks from '../pages/networks/reducers'
import salons from '../pages/salons/reducers'
import positions from '../pages/positions/reducers'

export default combineReducers({
  router,
  security,
  networks,
  salons,
  positions,
})
