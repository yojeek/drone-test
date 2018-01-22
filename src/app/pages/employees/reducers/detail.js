import { createReducer } from '../../../utils'
import * as actions from '../constants/detail'

const initialState = {
  firstName: '',
  lastName: '',
  photo: '',
  network: '1',
  position: '1',
  errors: {},
}

export default createReducer(initialState, {
  [actions.load]: (state, { employee }) => ({
    ...state,
    ...employee,
    network: employee ? employee.network.id : '',
    position: employee ? employee.position.id : '',
  }),
  [actions.clear]: () => initialState,
  [actions.change]: (state, { field, value }) => ({
    ...state,
    [field]: value,
  }),
  [actions.setErrors]: (state, { errors }) => ({
    ...state,
    errors,
  }),
})
