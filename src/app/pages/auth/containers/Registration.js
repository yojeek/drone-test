import { connect } from 'react-redux'
import { change, register } from '../actions/registration'
import Registration from '../components/Registration'

export default connect(
  state => ({
    step: state.auth.registration.step,
    company: state.auth.registration.company,
    name: state.auth.registration.name,
    phone: state.auth.registration.phone,
    email: state.auth.registration.email,
    errors: state.auth.registration.errors,
  }),
  dispatch => ({
    onChangeCompany: value => dispatch(change('company', value)),
    onChangeName: value => dispatch(change('mame', value)),
    onChangePhone: value => dispatch(change('phone', value)),
    onChangeEmail: value => dispatch(change('email', value)),
    onChangeCaptcha: value => dispatch(change('captcha', value)),
    onRegister: () => dispatch(register()),
  }),
)(Registration)
