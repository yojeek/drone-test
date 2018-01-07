import Auth from '../containers/Auth'
import Login from '../containers/Login'
import Registration from '../containers/Registration'

export default function getRoutes() {
  return {
    component: Auth,
    path: 'auth',
    childRoutes: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'registration',
        component: Registration,
      },
    ],
  }
}
