import React, { Component } from 'react'
import { connect } from 'react-redux'
import { load as loadNetworks } from '../../networks/actions/list'
import { load } from '../actions/list'
import List from '../components/List'

class Container extends Component {
  state = {
    // TODO: Считать значение выбранной сети из URL, если есть
    selectedNetwork: '0',
  }

  componentWillMount() {
    this.props.onLoad()
    this.props.onLoadNetworks()
  }

  onChangeNetwork = (e) => {
    const selectedNetwork = e.target.value || null
    this.setState(() => ({ selectedNetwork }))
  }

  render() {
    const { selectedNetwork } = this.state
    const rowsByNetwork = selectedNetwork === '0'
      ? this.props.rows
      : this.props.rows.filter(position => position.network.id === selectedNetwork)
    return (
      <List
        {...this.state}
        {...this.props}
        rows={rowsByNetwork}
        onChangeNetwork={this.onChangeNetwork}
      />
    )
  }
}

export default connect(
  state => ({
    ...state.positions.list,
    networks: state.networks.list.rows,
  }),
  (dispatch, { history }) => ({
    onLoad: () => dispatch(load()),
    onLoadNetworks: () => dispatch(loadNetworks()),
  }),
)(Container)
