import gql from 'graphql-tag'
import * as actions from '../constants/list'

export const load = () => async (dispatch, getState, client) => {
  const { data } = await client.query({
    fetchPolicy: 'network-only',
    query: gql`
      query Employees {
        employees {
          count
          rows {
            id
            firstName
            lastName
            photo
            network {
              id
              name
            }
            position {
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
    ...data.employees,
  })
}
