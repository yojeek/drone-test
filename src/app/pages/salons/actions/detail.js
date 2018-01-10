import gql from 'graphql-tag'
import * as actions from '../constants/detail'
import { load as loadSalons } from './list'

export const clear = () => ({
  type: actions.clear,
})

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const load = (id) => async (dispatch, getState, client) => {
  const [salon] = getState().salons.list.rows.filter(row => row.id === id)

  if (salon) {
    dispatch({
      type: actions.load,
      salon,
    })

    return null
  }

  const { data } = await client.query({
    fetchPolicy: 'network-only',
    query: gql`
      query Salon ($id: ID!) {
        salon (id: $id) {
          id
          name
          photo
          country
          city
          address
          network {
            id
            name
          }
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
  const { name, photo, country, city, address, network } = getState().salons.detail

  const { data } = await client.mutate({
    mutation: gql`
      mutation createSalon(
        $name: String!,
        $photo: Upload!,
        $network: ID!,
        $country: String!,
        $city: String!,
        $address: String!
      ) {
        createSalon(
          name: $name,
          photo: $photo,
          network: $network,
          country: $country,
          city: $city,
          address: $address
        ) {
          errors {
            name
            photo
            network
            country
            city
            address
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
      country,
      city,
      address,
      network,
    },
  })

  if (data.createSalon.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.createSalon.errors,
    })
  } else {
    history.push('/salons')
    dispatch(loadSalons())
  }
}

export const update = () => async (dispatch, getState, client, history) => {
  const { id, name, photo, country, city, address, network } = getState().salons.detail

  const { data } = await client.mutate({
    mutation: gql`
      mutation updateSalon(
        $id: ID!,
        $name: String!,
        $photo: Upload,
        $network: ID!,
        $country: String!,
        $city: String!,
        $address: String!
      ) {
        updateSalon(
          id: $id,
          name: $name,
          photo: $photo,
          network: $network,
          country: $country,
          city: $city,
          address: $address
        ) {
          errors {
            name
            photo
            network
            country
            city
            address
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
      country,
      city,
      address,
      network,
    },
  })

  if (data.updateSalon.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.updateSalon.errors,
    })
  } else {
    history.push('/salons')
    dispatch(loadSalons())
  }
}

export const remove = () => async (dispatch, getState, client, history) => {
  const { id } = getState().salons.detail

  const { data } = await client.mutate({
    mutation: gql`
      mutation removeSalon($id: ID!) {
        removeSalon(id: $id)
      }
    `,
    variables: {
      id,
    },
  })

  history.push('/salons')
  dispatch(loadSalons())
}
