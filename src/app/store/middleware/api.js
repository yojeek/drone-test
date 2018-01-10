import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
//import { logout } from '../../actions/security'

export default history => ({ dispatch, getState }) => {
  const httpLink = createUploadLink({
    uri: process.env.API_URL,
  })

  const middlewareLink = setContext(() => ({
    headers: {
      //authorization: getState().security.token || null,
    },
  }))

  const errorLink = onError(({ networkError }) => {
    if (networkError.statusCode === 401) {
      //dispatch(logout())
    }
  })

  const link = ApolloLink.from([
    middlewareLink,
    errorLink,
    httpLink,
  ])

  const client = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link,
  })

  return next => (action) => {
    if (typeof action === 'function') {
      action(dispatch, getState, client, history)
    } else {
      next(action)
    }
  }
}
