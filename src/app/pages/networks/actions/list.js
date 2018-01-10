import gql from 'graphql-tag'
import * as actions from '../constants/list'

export const load = () => async (dispatch, getState, client) => {
  const { data } = await client.query({
    fetchPolicy: 'network-only',
    query: gql`
      query Networks {
        networks {
          count
          rows {
            id
            name
            photo
            phone
          }
        }
      }
    `,
  })

  dispatch({
    type: actions.load,
    ...data.networks,
  })
}
