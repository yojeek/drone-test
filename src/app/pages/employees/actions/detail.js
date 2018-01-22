import gql from 'graphql-tag'
import * as actions from '../constants/detail'
import { load as loadEmployees } from './list'

export const clear = () => ({
  type: actions.clear,
})

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const load = id => async (dispatch, getState, client) => {
  const [employee] = getState()
    .employees
    .list
    .rows
    .filter(row => row.id === id)

  if (employee) {
    dispatch({
      type: actions.load,
      employee,
    })

    return null
  }

  const { data } = await client.query({
    fetchPolicy: 'network-only',
    query: gql`
      query Employee ($id: ID!) {
        employee (id: $id) {
          id
          firstName
          lastName
          photo
          phone
          email
          specialization
          notes
          hiredAt
          firedAt
          display
          available
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
    `,
    variables: {
      id,
    },
  })

  dispatch({
    type: actions.load,
    network: data.network,
  })

  return null
}

export const create = () => async (dispatch, getState, client, history) => {
  const {
    firstName, lastName, phone, email, specialization, notes,
    network, position, display, available, hiredAt,
  } = getState().employees.detail

  const { data } = await client.mutate({
    mutation: gql`
      mutation createEmployee(
      $firstName: String!,
      $lastName: String,
      $phone: String,
      $email: String,
      $specialization: String,
      $notes: String,
      $network: ID!,
      $position: ID!
      $display: Boolean,
      $available: Boolean,
      $hiredAt: String!
      ) {
        createEmployee(
          firstName: $firstName,
          lastName: $lastName,
          phone: $phone,
          email: $email,
          specialization: $specialization,
          notes: $notes,
          network: $network,
          position: $position,
          display: $display,
          available: $available,
          hiredAt: $hiredAt
        ) {
          errors {
            firstName
            network
            position
          }
          result {
            id
          }
        }
      }
    `,
    variables: {
      firstName,
      lastName,
      phone,
      email,
      specialization,
      notes,
      network,
      position,
      display,
      available,
      hiredAt
    },
  })

  if (data.createEmployee.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.createEmployee.errors,
    })
  } else {
    history.push('/employees')
    dispatch(loadEmployees())
  }
}

export const update = () => async (dispatch, getState, client, history) => {
  const { id, firstName, network, position } = getState().employees.detail

  const { data } = await client.mutate({
    mutation: gql`
      mutation updateEmployee(
      $id: ID!,
      $firstName: String!,
      $network: ID!,
      $position: ID!
      ) {
        updateEmployee(
          id: $id,
          firstName: $firstName,
          network: $network,
          position: $position
        ) {
          errors {
            firstName
            network
            position
          }
          result {
            id
          }
        }
      }
    `,
    variables: {
      id,
      firstName,
      network,
      position,
    },
  })

  if (data.updateEmployee.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.updateEmployee.errors,
    })
  } else {
    history.push('/employees')
    dispatch(loadEmployees())
  }
}

export const remove = () => async (dispatch, getState, client, history) => {
  const { id } = getState().employees.detail

  await client.mutate({
    mutation: gql`
      mutation removeEmployee($id: ID!) {
        removeEmployee(id: $id)
      }
    `,
    variables: {
      id,
    },
  })

  history.push('/employees')
  dispatch(loadEmployees())
}
