import { createReducer, formatErrors } from '../../../utils'
import * as actions from '../constants/registration'

const initialState = {
  step: 0,
  company: '',
  name: '',
  phone: '',
  email: '',
  captcha: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors: formatErrors(errors) }),
  [actions.goToPersonal]: state => ({ ...state, step: 0 }),
  [actions.goToSuccess]: state => ({ ...state, step: 1 }),
  [actions.clear]: () => initialState,
})
