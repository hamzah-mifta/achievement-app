<template>
  <Navbar />
  <router-view/>
</template>

<script>
import '@/assets/scripts/main.js'
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style>

</style>
