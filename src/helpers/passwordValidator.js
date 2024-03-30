export function passwordValidator(password) {
  if (!password) return "Please fill in this field."
  if (password.length < 4) return 'Password should contain at least 8 characters.'
  return ''
}
