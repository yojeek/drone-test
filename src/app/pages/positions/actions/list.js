import gql from 'graphql-tag'
import * as actions from '../constants/list'

export const load = () => async (dispatch, getState, client) => {
  const { data } = await client.query({
    fetchPolicy: 'network-only',
    query: gql`
      query Positions {
        positions {
          count
          rows {
            id
            name
            description
            network {
              id
              name
            }
          }
        }
      }
    `,
  })

  dispatch({
    type: actions.load,
    ...data.positions,
  })
}
