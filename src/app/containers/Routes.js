import React from 'react'
import { Route, Switch } from 'react-router'
import App from '../components/App'
import Networks from '../pages/networks/containers/Routes'
import Salons from '../pages/salons/containers/Routes'
import Positions from '../pages/positions/containers/Routes'
import Employees from '../pages/employees/containers/Routes'

// <Route path='/auth' component={Auth} />
const Routes = () => (
  <Switch>
    <Route path='/'>
      <App>
        <Route path='/networks' component={Networks} />
        <Route path='/salons' component={Salons} />
        <Route path='/positions' component={Positions} />
        <Route path='/employees' component={Employees} />
      </App>
    </Route>
  </Switch>
)

export default Routes
