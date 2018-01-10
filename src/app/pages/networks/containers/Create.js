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
  state => state.networks.detail,
  dispatch => ({
    onChangeName: value => dispatch(change('name', value)),
    onChangePhoto: value => dispatch(change('photo', value)),
    onChangePhone: value => dispatch(change('phone', value)),
    onClear: () => dispatch(clear()),
    onSave: () => dispatch(create()),
  }),
)(Container)
