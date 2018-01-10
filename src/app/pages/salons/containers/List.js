import React, { Component } from 'react'
import { connect } from 'react-redux'
import { load as loadNetworks } from '../../networks/actions/list'
import { load } from '../actions/list'
import List from '../components/List'

class Container extends Component {
  componentWillMount() {
    this.props.onLoad()
    this.props.onLoadNetworks()
  }

  render() {
    return (
      <List {...this.props} />
    )
  }
}

export default connect(
  state => state.salons.list,
  (dispatch, { history }) => ({
    onLoad: () => dispatch(load()),
    onLoadNetworks: () => dispatch(loadNetworks()),
  }),
)(Container)
