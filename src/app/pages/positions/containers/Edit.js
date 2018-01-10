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
  state => state.positions.detail,
  (dispatch, { match }) => ({
    onLoad: () => dispatch(load(match.params.id)),
    onChangeName: value => dispatch(change('name', value)),
    onChangeDescription: value => dispatch(change('description', value)),
    onRemove: () => dispatch(remove()),
    onClear: () => dispatch(clear()),
    onSave: () => dispatch(update()),
  }),
)(Container)
