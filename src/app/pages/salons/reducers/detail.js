import { createReducer } from '../../../utils'
import * as actions from '../constants/detail'

const initialState = {
  name: '',
  photo: '',
  country: '',
  city: '',
  address: '',
  network: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.load]: (state, { salon }) => ({
    ...state,
    ...salon,
    network: salon ? salon.network.id : '',
  }),
  [actions.clear]: () => initialState,
  [actions.change]: (state, { field, value }) => ({
    ...state,
    [field]: value,
  }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
})
