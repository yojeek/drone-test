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
  state => ({
    ...state.employees.list,
    networks: state.networks.list.rows,
  }),
  dispatch => ({
    onLoad: () => dispatch(load()),
  }),
)(Container)
