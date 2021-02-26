import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import css file
import './assets/main.css'

// import axios
import axios from 'axios'
window.axios = axios

// sweet alert
import Swal from 'sweetalert2'
window.Swal = Swal

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast

createApp(App).use(router).mount('#app')
