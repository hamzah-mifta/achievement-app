// validate token
const isValid = (token) => {
  const payload = JSON.parse(atob(token.split('.')[1]))
  
  if (payload) {
    return payload.iss = 'http://127.0.0.1:8000/api/login' || 'http://127.0.0.1:8000/api/register' ? true : false
  }
  return false
}

// mengambil token
const getToken = () => {
  localStorage.getItem('token')
}

// store token dari respone fetch data
const storeToken = (res) => {
  const token = res.data.data.access_token

  if (isValid(token)) {
    localStorage.setItem('token', token)
  }
}

// menghapus token
const clearToken = () => {
  localStorage.removeItem('token')
}

const useToken = () => {
  return { getToken, storeToken, clearToken, isValid }
}

export default useToken