import { connect } from 'react-redux'
import { change, login } from '../actions/login'
import Login from '../components/Login'

export default connect(
  state => ({
    phone: state.auth.login.phone,
    email: state.auth.login.email,
    password: state.auth.login.password,
    errors: state.auth.login.errors,
  }),
  dispatch => ({
    onChangePhone: value => dispatch(change('email', value)),
    onChangeEmail: value => dispatch(change('email', value)),
    onChangePassword: value => dispatch(change('password', value)),
    onLogin: () => dispatch(login()),
  }),
)(Login)
