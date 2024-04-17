export enum EndPoint {
  //Global
  id = ":id",

  // Auth
  authPrefix = 'auth',
  signIn = 'signin',
  signUp = 'signup',
  registerByGoogle = 'register-by-google',
  forgetPassword = 'forget-password',
  verifyPassResetCode = 'verify-reset-code',
  resetPassword = 'reset-password',

  // user
  userPrefix = 'users',
  getMe = 'get-me',
  changePasswordLoggedUser = 'change-password',
  updateLoggedUser = 'update-user',
  deleteLoggedUser = 'delete-user',
}