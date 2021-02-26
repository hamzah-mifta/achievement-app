import { ref } from 'vue'
import axios from 'axios'

const getUser = () => {
  const user = ref(null)
  const error = ref(null)
  const token = localStorage.getItem('token')

  if (token) {
    axios.get('http://127.0.0.1:8000/api/user/user/details', {
    headers: {
        Authorization: `Bearer ${token}`
      } 
    })
    .then(res => {
      user.value = { ...res.data }
      console.log(user.value)
    })
    .catch(error => console.log(error)) 
  } else {
    console.log('no user logged in')
  }

  return { user, error }
}

export default getUser