import axios from "axios";
import { ref } from "vue";

const error = ref(null)
const isPending = ref(false)

const logout = async () => {
  error.value = null
  isPending.value = true

  await axios.get('http://127.0.0.1:8000/api/logout', {
    headers: {
      Authorization: `Bearer ${localStorage.removeItem('token')}`
    }
  })
  .then(
    isPending.value = false
  )
  .catch(err => {
    console.log(err)
    error.value = err
    isPending.value = false
  })
}

const useLogout = () => {
  return { logout }
}

export default useLogout