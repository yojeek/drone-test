import gql from 'graphql-tag'
import * as actions from '../constants/detail'
import { load as loadNetworks } from './list'

export const clear = () => ({
  type: actions.clear,
})

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const load = (id) => async (dispatch, getState, client) => {
  const [network] = getState().networks.list.rows.filter(row => row.id === id)

  if (network) {
    dispatch({
      type: actions.load,
      network,
    })

    return null
  }

  const { data } = await client.query({
    fetchPolicy: 'network-only',
    query: gql`
      query Network ($id: ID!) {
        network (id: $id) {
          id
          name
          photo
          phone
        }
      }
    `,
    variables: {
      id,
    },
  })

  dispatch({
    type: actions.load,
    network: data.network,
  })
}

export const create = () => async (dispatch, getState, client, history) => {
  const { name, photo, phone } = getState().networks.detail

  const { data } = await client.mutate({
    mutation: gql`
      mutation createNetwork(
        $name: String!,
        $photo: Upload!,
        $phone: String!
      ) {
        createNetwork(
          name: $name,
          photo: $photo,
          phone: $phone
        ) {
          errors {
            name
            photo
            phone
          }
          result {
            id
          }
        }
      }
    `,
    variables: {
      name,
      photo,
      phone,
    },
  })

  if (data.createNetwork.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.createNetwork.errors,
    })
  } else {
    history.push('/networks')
    dispatch(loadNetworks())
  }
}

export const update = () => async (dispatch, getState, client, history) => {
  const { id, name, photo, phone } = getState().networks.detail

  const { data } = await client.mutate({
    mutation: gql`
      mutation updateNetwork(
        $id: ID!,
        $name: String!,
        $photo: Upload,
        $phone: String!
      ) {
        updateNetwork(
          id: $id,
          name: $name,
          photo: $photo,
          phone: $phone
        ) {
          errors {
            name
            photo
            phone
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
      photo: photo instanceof File ? photo : null,
      phone,
    },
  })

  if (data.updateNetwork.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.updateNetwork.errors,
    })
  } else {
    history.push('/networks')
    dispatch(loadNetworks())
  }
}

export const remove = () => async (dispatch, getState, client, history) => {
  const { id } = getState().networks.detail

  const { data } = await client.mutate({
    mutation: gql`
      mutation removeNetwork($id: ID!) {
        removeNetwork(id: $id)
      }
    `,
    variables: {
      id,
    },
  })

  history.push('/networks')
  dispatch(loadNetworks())
}
