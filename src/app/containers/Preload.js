import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { load as loadUser } from '../actions/user'

class Preload extends Component {
  static childContextTypes = {
    hasAccess: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      canView: /^\/auth/.test(window.location.pathname),
    }
  }

  getChildContext() {
    return {
      hasAccess: (resource, permission) => {
        const { acl = {} } = this.props

        return acl[`${resource}_${permission}`] || false
      },
    }
  }

  componentWillMount() {
    const { token, goToLogin, onLoadUser } = this.props

    if (!token && !/^\/auth/.test(window.location.pathname)) {
      this.setState({ canView: true })
      goToLogin()
    }

    if (token) {
      onLoadUser()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { goToMain, onLoadUser } = this.props

    if (!this.props.token && nextProps.token) {
      if (/^\/auth/.test(window.location.pathname)) {
        goToMain()
        onLoadUser()
      }
    }

    if (nextProps.acl && Object.keys(nextProps.acl).length > 0) {
      this.setState({ canView: true })
    }
  }

  render() {
    const { children } = this.props
    const { canView } = this.state

    if (!canView) {
      return null
    }

    return children
  }
}

export default connect(
  state => ({
    token: state.security.token,
    acl: state.security.acl,
  }),
  (dispatch, { history }) => ({
    goToMain: () => history.push('/'),
    goToLogin: () => history.push('/auth/login'),
    onLoadUser: () => dispatch(loadUser()),
  }),
)(Preload)
