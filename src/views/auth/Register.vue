<template>
  <div class="register">
  <h3 class="center">Register</h3>
  <form @submit.prevent="handleSubmit">
    
    <!-- input name -->
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="pe-7s-user"></i>
        </span>
      </div>
      <input type="text" class="form-control" placeholder="name" v-model="name">
    </div>

    <!-- input email -->
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="pe-7s-mail"></i>
        </span>
      </div>
      <input type="email" class="form-control" placeholder="email" v-model="email">
    </div>

    <!-- input password -->
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="pe-7s-key"></i>
        </span>
      </div>
      <input type="password" class="form-control" placeholder="password" v-model="password">
    </div>

    <!-- input password_confirmation -->
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="pe-7s-door-lock"></i>
        </span>
      </div>
      <input type="password" class="form-control" placeholder="password confirmation" v-model="password_confirmation">
    </div>
    
    <!-- submit -->
    <div class="input-group center submit">
      <button type="submit" class="mt-1 btn btn-primary">Submit</button>
    </div>
    <p class="center">Already have an account? <router-link :to="{ name: 'Login' }">Login</router-link> instead</p>
  </form>
</div>
</template>

<script>
import axios from 'axios'
// import { useToken } from '@/composables/useToken'
// import 'vue-router'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      error: null
    }
  },
  methods: {
    handleSubmit() {
      axios.post(`http://127.0.0.1:8000/api/register`, {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
      .then(response => {
        localStorage.setItem('token', response.data.data.token.token)
        this.$router.push({ name: 'Home' })
      })
      .catch(err => {
        this.error = err
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
h3 {
  padding-bottom: 20px;
}
p {
  margin-bottom: 0;
  padding-bottom: 0;
}
.center {
  text-align: center;
  justify-content: center;
}
.form-check {
  padding: 10px auto;
}
.input-group {
  padding: 10px 0;
}
.input-group-text {
  min-width: 50px;
  align-content: center;
  font-size: 20px;
}
.register {
  background: white;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.1);
  margin: 0 auto;
  margin-top: 100px;
  max-width: 500px;
  padding: 30px;
}
.submit {
  padding: 20px;
}
</style>