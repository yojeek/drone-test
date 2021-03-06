import { createReducer } from '../../../utils'
import * as actions from '../constants/list'

const initialState = {
  count: 0,
  rows: [],
}

export default createReducer(initialState, {
  [actions.load]: (state, { rows, count }) => ({
    ...state,
    count,
    rows,
  }),
})
