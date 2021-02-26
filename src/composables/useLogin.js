import axios from "axios";
import { ref } from 'vue'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password, remember_me) => {
  error.value = null
  isPending.value = true

  const res = axios.post('http://127.0.0.1:8000/api/login', {
      email: email,
      password: password,
      remember_me: remember_me
    })
    .then(res => {
      // console.log(res)
      localStorage.setItem('token', res.data.data.access_token)
      isPending.value = false
    })
    .catch(err => {
      error.value = err
      isPending.value = false
      console.log(error.value)
    })
}

const useLogin = () => {
  return { error, isPending, login }
}

export default useLogin
