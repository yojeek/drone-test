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
    ...state.salons.detail,
    networks: state.networks.list.rows,
  }),
  dispatch => ({
    onChangeName: value => dispatch(change('name', value)),
    onChangePhoto: value => dispatch(change('photo', value)),
    onChangeCountry: value => dispatch(change('country', value)),
    onChangeCity: value => dispatch(change('city', value)),
    onChangeAddress: value => dispatch(change('address', value)),
    onChangeNetwork: value => dispatch(change('network', value)),
    onClear: () => dispatch(clear()),
    onSave: () => dispatch(create()),
  }),
)(Container)
