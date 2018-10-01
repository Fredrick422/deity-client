<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// @ is an alias to /src
import Sidebar from '@/components/includes/Sidebar.vue';
import Header from '@/components/includes/Header.vue';
import Footer from '@/components/includes/Footer.vue';
import Login from '@/components/includes/Login.vue';

export default class App extends Vue {
  data() {
    return {
    };
  },

  components: {
    'app-sidebar': Sidebar,
    'app-header': Header,
    'app-footer' : Footer,
    'app-login' : Login,
  },
  
};
</script>