export const auth = '@@avisits-cabinet/user/AUTH'
export const load = '@@avisits-cabinet/user/LOAD'
export const logout = '@@avisits-cabinet/user/LOGOUT'
export const update = '@@avisits-cabinet/user/UPDATE'
export const updateActivation = '@@avisits-cabinet/user/UPDATE_ACTIVATION'
export const activationSent = '@@avisits-cabinet/user/ACTIVATION_SENT'
export const activationError = '@@avisits-cabinet/user/ACTIVATION_ERROR'


export const roles = {
  owner: 'Владелец',
  manager: 'Менеджер',
}

const allRoles = [{
  value: '',
  label: 'Все роли',
}]

export const rolesOptions = Object.keys(roles).map(role => ({
  value: role,
  label: roles[role],
}))

export const allRolesOptions = [{
  value: '',
  label: 'Все роли',
}].concat(rolesOptions)
