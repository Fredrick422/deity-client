<template>
  <div class="linear-gradiant login-register">
    <div v-bind:class="['login-register-container', {loaded:loaded}]">
      <app-badge></app-badge>
      <b-container>
        <div v-bind:class="['login-box text-center pb-5', {in:show}]">
          <b-row class="justify-content-md-center">
            <b-col md="6" lg="4">
              <app-login></app-login>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Badge from '@/components/badge/badge.vue'
  import loginForm from '@/forms/auth/login.vue'

export default Vue.extend({

  data(){
     return {
       show: false,
       loaded: false,
     }
  },

  components:{
    'app-badge': Badge,
    'app-login': loginForm
  },

  beforeMount(){
      setTimeout(() => {  
          this.show = true
      } , 5000)
      setTimeout(() => {  
          this.loaded = true
      } , 4000) 
  },

  watch:{

  }
})
</script>

<style lang="scss">
   @import '../assets/scss/pages/login-register-lock.scss';
</style>

