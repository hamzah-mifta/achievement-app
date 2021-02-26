import axios from "axios";
import { ref } from 'vue'
import useToken from './useToken'
import Swal from 'sweetalert2'


const { storeToken } = useToken()

const error = ref(null)
const isPending = ref(false)

const login = async (email, password, remember_me) => {
  error.value = null
  isPending.value = true

  axios.post('http://127.0.0.1:8000/api/login', {
      email: email,
      password: password,
      remember_me: remember_me
    })
    .then(res => {
      // console.log(res.data.data.userToken)
      storeToken(res)
      isPending.value = false
    })
    .catch(err => {
      // console.log(err.response)
      error.value = 'Invalid email or password'
      Toast.fire({
        icon: 'error',
        title: error.value,
        body: error.value
      })
    })
}

const useLogin = () => {
  return { error, isPending, login }
}

export default useLogin
