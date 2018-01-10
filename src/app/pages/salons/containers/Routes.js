import React from 'react'
import { Route, Switch } from 'react-router'
import List from './List'
import Create from './Create'
import Edit from './Edit'

const Routes = () => [
  <List key='list' />,
  <Switch key='detail'>
    <Route path='/salons/new' component={Create} />
    <Route path='/salons/:id' component={Edit} />
  </Switch>
]

export default Routes
