import gql from 'graphql-tag'
import * as actions from '../constants/detail'
import { load as loadPositions } from './list'

export const clear = () => ({
  type: actions.clear,
})

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const load = (id) => async (dispatch, getState, client) => {
  const [position] = getState().positions.list.rows.filter(row => row.id === id)

  if (position) {
    dispatch({
      type: actions.load,
      position,
    })

    return null
  }

  const { data } = await client.query({
    fetchPolicy: 'network-only',
    query: gql`
      query Position ($id: ID!) {
        position (id: $id) {
          id
          name
          description
        }
      }
    `,
    variables: {
      id,
    },
  })

  dispatch({
    type: actions.load,
    position: data.position,
  })
}

export const create = () => async (dispatch, getState, client, history) => {
  const { name, description } = getState().positions.detail

  const { data } = await client.mutate({
    mutation: gql`
      mutation createPosition(
        $name: String!,
        $description: String!
      ) {
        createPosition(
          name: $name,
          description: $description
        ) {
          errors {
            name
            description
          }
          result {
            id
          }
        }
      }
    `,
    variables: {
      name,
      description,
    },
  })

  if (data.createPosition.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.createPosition.errors,
    })
  } else {
    history.push('/positions')
    dispatch(loadPositions())
  }
}

export const update = () => async (dispatch, getState, client, history) => {
  const { id, name, description } = getState().positions.detail

  const { data } = await client.mutate({
    mutation: gql`
      mutation updatePosition(
        $id: ID!,
        $name: String!,
        $description: String!
      ) {
        updatePosition(
          id: $id,
          name: $name,
          description: $description
        ) {
          errors {
            name
            description
          }
          result {
            id
          }
        }
      }
    `,
    variables: {
      id,
      name,
      description,
    },
  })

  if (data.updatePosition.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.updatePosition.errors,
    })
  } else {
    history.push('/positions')
    dispatch(loadPositions())
  }
}

export const remove = () => async (dispatch, getState, client, history) => {
  const { id } = getState().positions.detail

  const { data } = await client.mutate({
    mutation: gql`
      mutation removePosition($id: ID!) {
        removePosition(id: $id)
      }
    `,
    variables: {
      id,
    },
  })

  history.push('/positions')
  dispatch(loadPositions())
}
