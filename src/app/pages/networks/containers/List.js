import React, { Component } from 'react'
import { connect } from 'react-redux'
import { load } from '../actions/list'
import List from '../components/List'

class Container extends Component {
  componentWillMount() {
    this.props.onLoad()
  }

  render() {
    return (
      <List {...this.props} />
    )
  }
}

export default connect(
  state => state.networks.list,
  (dispatch, { history }) => ({
    onLoad: () => dispatch(load()),
  }),
)(Container)
