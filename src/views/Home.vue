<template>
  <div class="home">
    
  </div>
</template>

<script lang="ts">

import Vue from "vue"
//import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import metadata from '@/mixins/metadata';

export default Vue.extend({
  data(){
    
  },

  meta() {
    return this.$route.meta;
  },

  mixins: [metadata],

  components: {
    HelloWorld
  },
})
</script>
