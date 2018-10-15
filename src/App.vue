<template>
  <div id="app">
    <div v-if="auth.state === true">
      <app-header></app-header>
      <app-sidebar></app-sidebar>
      <div class="page-wrapper">
        <div class="container-fluid">
          <router-view/>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
    <app-login v-else></app-login>
  </div>
</template>

<script lang="ts">
//import { Component, Vue } from 'vue-property-decorator';
import Vue from "vue"
import {mapState} from 'vuex'

// @ is an alias to /src
import Sidebar from '@/includes/Sidebar.vue';
import Header from '@/includes/Header.vue';
import Footer from '@/includes/Footer.vue';
import Login from '@/includes/Login.vue';

export default Vue.extend({
  data() {
    return {
    };
  },

  components: {
    'app-sidebar': Sidebar,
    'app-header': Header,
    'app-footer' : Footer,
    'app-login': Login,
  },

  computed: {
      ...mapState('auth',[
        'auth'
      ]),
  }
 
});
</script>