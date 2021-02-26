<template>
  <div class="app-header header-shadow ">
    <div class="app-header__logo">
      <router-link :to="{ name: 'Home' }">
        <div class="logo-src"></div>
      </router-link>
      <div class="header__pane ml-auto">
        <div>
          <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
      
    <div class="app-header__mobile-menu">
      <div>
        <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
      
    <div class="app-header__menu">
      <span>
        <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
          <span class="btn-icon-wrapper">
            <i class="fa fa-ellipsis-v fa-w-6"></i>
          </span>
        </button>
      </span>
    </div>    
      
    <div class="app-header__content">
      <div class="app-header-left">
        <!-- START search warper -->
        <!-- <div class="search-wrapper">
          <div class="input-holder">
            <input type="text" class="search-input" placeholder="Type to search">
            <button class="search-icon"><span></span></button>
          </div>
          
          <button class="close"></button>
        </div> -->
        <!-- END search warper -->

        <ul class="header-menu nav">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link">
              <i class="nav-link-icon fa fa-home"> </i>
              Home
            </router-link>
          </li>
          <li class="btn-group nav-item">
              <a href="javascript:void(0);" class="nav-link">
                <i class="nav-link-icon fa fa-trophy"></i>
                Achievements
              </a>
          </li>
          <li class="dropdown nav-item">
            <a href="javascript:void(0);" class="nav-link">
              <i class="nav-link-icon fa fa-book"></i>
              Stories
            </a>
          </li>
        </ul>        
      </div>

      <!-- right navbar -->
      <div v-if="user" class="app-header-right">
        <div class="header-btn-lg pr-0">
          <div class="widget-content p-0">
            <div class="widget-content-wrapper">

              <!-- user profile -->
              <div class="widget-content-left  ml-3 header-user-info">
                <div>
                  <div class="widget-heading">
                    {{ user.name }}
                  </div>
                  <div class="widget-subheading">
                    {{ user.email }}
                  </div>
                </div>
              </div>
              <!-- END user profile -->

              <!-- dropdown -->
              <div class="widget-content-left">
                <div class="btn-group">
                  <button data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn">
                    <i class="fa fa-angle-down ml-2 opacity-8"></i>
                  </button>
                  
                  <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                    <button type="button" tabindex="0" class="dropdown-item">My Account</button>
                    <button type="button" tabindex="0" class="dropdown-item" @click="handleLogout">Logout</button>
                  </div>
                </div>
              </div>  
              <!-- END dropdown -->
            </div>
            
          </div>
        </div>        
      </div>
      <!-- END right navbar -->

      <!-- START right navbar if no user -->
      <div v-else class="app-header-right">
        <router-link :to="{ name: 'Login'}" class="mb-2 mr-2 border-0 btn-transition btn btn-primary">Login</router-link>
      </div>
      <!-- END right navbar if no user -->

    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import getUser from '@/composables/getUser'
import useLogout from '@/composables/useLogout'
import { onUpdated, watch, watchEffect } from 'vue'

export default {
  setup() {
    const { user, error } = getUser()
    const { logout } = useLogout()
    const router = useRouter()
    // const isLoggedIn = ref(false)

    const handleLogout = async () => {
      await logout()
      router.push({ name: 'Login' })
    } 

    return { user, error, handleLogout }
  }
}
</script>

<style>

</style>