import { createReducer } from '../../../utils'
import * as actions from '../constants/detail'

const initialState = {
  name: '',
  description: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.load]: (state, { position }) => ({
    ...state,
    ...position,
  }),
  [actions.clear]: () => initialState,
  [actions.change]: (state, { field, value }) => ({
    ...state,
    [field]: value,
  }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
})
