import React, { Component } from 'react'
import { connect } from 'react-redux'
import { create, change, clear } from '../actions/detail'
import Detail from '../components/Detail'

class Container extends Component {
  componentWillUnmount() {
    this.props.onClear()
  }

  render() {
    return (
      <Detail {...this.props} />
    )
  }
}

export default connect(
  state => ({
    model: state.employees.detail,
    networks: state.networks.list.rows,
  }),
  dispatch => ({
    onChange: (field, value) => dispatch(change(field, value)),
    onClear: () => dispatch(clear()),
    onSave: () => dispatch(create()),
  }),
)(Container)
