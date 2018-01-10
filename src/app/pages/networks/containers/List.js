import React, { Component } from 'react'
import { connect } from 'react-redux'
import { load } from '../actions/list'
import { load as loadSalons } from '../../salons/actions/list'
import List from '../components/List'

class Container extends Component {
  componentWillMount() {
    this.props.onLoad()
    this.props.onLoadSalons()
  }

  render() {
    const { rows, salons } = this.props
    const data = rows.map(network => ({
      ...network,
      salons: salons.filter(salon => salon.network.id === network.id),
    }))
    return (
      <List {...this.props} rows={data} />
    )
  }
}

export default connect(
  state => ({ ...state.networks.list, salons: state.salons.list.rows }),
  (dispatch, { history }) => ({
    onLoad: () => dispatch(load()),
    onLoadSalons: () => dispatch(loadSalons()),
  }),
)(Container)
