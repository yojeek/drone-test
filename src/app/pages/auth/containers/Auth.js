import { connect } from 'react-redux'
import Auth from '../components/Auth'

export default connect(
  state => ({
    pathname: state.router.location.pathname,
  }),
)(Auth)
