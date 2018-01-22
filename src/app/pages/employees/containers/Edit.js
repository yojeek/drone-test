import React, { Component } from 'react'
import { connect } from 'react-redux'
import { load, update, change, remove, clear } from '../actions/detail'
import Detail from '../components/Detail'

class Container extends Component {
  componentWillMount() {
    this.props.onLoad()
  }

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
    ...state.employees.detail,
    networks: state.networks.list.rows,
  }),
  (dispatch, { match }) => ({
    onLoad: () => dispatch(load(match.params.id)),
    onChangeName: value => dispatch(change('name', value)),
    onChangePhoto: value => dispatch(change('photo', value)),
    onChangeCountry: value => dispatch(change('country', value)),
    onChangeCity: value => dispatch(change('city', value)),
    onChangeAddress: value => dispatch(change('address', value)),
    onChangeNetwork: value => dispatch(change('network', value)),
    onRemove: () => dispatch(remove()),
    onClear: () => dispatch(clear()),
    onSave: () => dispatch(update()),
  }),
)(Container)
