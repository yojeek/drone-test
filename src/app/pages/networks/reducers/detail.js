import { createReducer } from '../../../utils'
import * as actions from '../constants/detail'

const initialState = {
  name: '',
  photo: '',
  phone: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.load]: (state, { network }) => ({
    ...state,
    ...network,
  }),
  [actions.clear]: () => initialState,
  [actions.change]: (state, { field, value }) => ({
    ...state,
    [field]: value,
  }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
})
