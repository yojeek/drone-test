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
    ...state.positions.detail,
    networks: state.networks.list.rows,
  }),
  dispatch => ({
    onChangeName: value => dispatch(change('name', value)),
    onChangeDescription: value => dispatch(change('description', value)),
    onChangeNetwork: value => dispatch(change('network', value)),
    onClear: () => dispatch(clear()),
    onSave: () => dispatch(create()),
  }),
)(Container)
