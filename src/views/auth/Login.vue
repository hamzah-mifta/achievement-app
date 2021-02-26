<template>
<div class="login">
  <h3 class="center">Login</h3>
  <form @submit.prevent="login">
    <!-- input email -->
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="pe-7s-mail"></i>
        </span>
      </div>
      <input type="email" class="form-control" placeholder="email" required v-model="email">
    </div>
    <!-- input password -->
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="pe-7s-key"></i>
        </span>
      </div>
      <input type="password" class="form-control" placeholder="password" required v-model="password">
    </div>
    <!-- remember me -->
    <div class="position-relative form-check">
      <label class="form-check-label" id="remember-me">
        <input type="checkbox" class="form-check-input" v-model="remember_me"> Remember me
      </label>
    </div>
    <!-- submit -->
    <div class="input-group center submit">
      <button type="submit" class="mt-1 btn btn-primary">Submit</button>
    </div>
    <p class="center">Don't have an account yet? <router-link :to="{ name: 'Register' }">Register</router-link> now</p>
  </form>
</div>
</template>

<script>
import useToken from '@/composables/useToken'

export default {
  data() {
    return {
      email: '',
      password: '',
      remember_me: false,
      error: null
    }
  },
  methods: {
    async login() {
      const { storeToken } = useToken()

      await axios.post(`http://127.0.0.1:8000/api/login`, {
        email: this.email,
        password: this.password,
        remember_me: this.remember_me
      })
      .then(response => {
        storeToken(response)
        this.$router.push({ name: 'Home' })
        Toast.fire({
          icon: 'success',
          title: 'Successfully logged in'
        })
      })
      .catch(err => {
        this.error = err.response
        Toast.fire({
          icon: 'error',
          title: 'Login failed'
        })
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
.login {
  background: white;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.1);
  margin: 0 auto;
  max-width: 500px;
  padding: 30px;
}
.submit {
  padding: 20px;
}
.login {
  margin-top: 100px;
}
</style>