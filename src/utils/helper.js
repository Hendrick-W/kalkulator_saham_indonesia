export const isEmptyString = (value) => {
  if(value === '' || value.trim() === '') return true

  return false
}