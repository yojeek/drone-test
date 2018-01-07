import gql from 'graphql-tag'
import { auth } from '../../../actions/user'
import * as actions from '../constants/registration'

const send = async (client) => {
  const activateUrl = `${window.location.origin}/auth/activate/`

  const { data } = await client.mutate({
    mutation: gql`
      mutation createUser (
        $company: String!,
        $name: String!,
        $phone: String!,
        $email: String!,
        $captcha: String!,
        $activateUrl: String!
      ) {
        createUser(
          name: $name,
          company: $company,
          phone: $phone,
          email: $email,
          captcha: $captcha,
          activateUrl: $activateUrl
        ) {
          token { id, email, phone,token }
          errors {
            key
            message
          }
        }
      }
    `,
    variables: {
      activateUrl,
    },
  })

  return data.createUser
}

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function register() {
  return async (dispatch, getState, client) => {
    const { captcha, ...variables } = getState().auth.registration

    const response = await send(client, { captcha: '', ...variables })

    if (response.errors.length > 1) {
      if (!captcha) {
        dispatch({
          type: actions.setErrors,
          errors: response.errors,
        })
      } else {
        dispatch({
          type: actions.setErrors,
          errors: response.errors.filter(({ key }) => !key.includes('captcha')),
        })
      }
    } else {
      const { errors, token } = await send(client, { captcha, ...variables })

      if (errors.length > 0) {
        dispatch({
          type: actions.setErrors,
          errors,
        })
      } else {
        dispatch(auth(token))

        dispatch({
          type: actions.goToSuccess,
        })
      }
    }
  }
}
