<template>
  <!-- ============================================================== -->
  <!-- Left Sidebar - style you can find in sidebar.scss  -->
  <!-- ============================================================== -->
  <aside id="leftSidebar" class="left-sidebar slideInOut">
      <!-- Sidebar scroll-->
      <div class="scroll-sidebar">
          <!-- Sidebar navigation-->
          <nav class="sidebar-nav">
              <ul id="sidebarnav">
                  <li v-on:click.prevent="/*setCurrent('item_1')*/" v-bind:class="{active: current == 'item_1'}"> <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i class="icon-Car-Wheel"></i><span class="hide-menu">Dashboard <span class="label label-rounded label-danger">4</span></span></a>
                      <ul aria-expanded="false" v-bind:class="['collapse ', {in: current == 'item_1' , show: current == 'item_1'} ]">
                          <li><a href="index.html">Minimal </a></li>
                          <li><a href="index2.html">Analytical</a></li>
                          <li><a href="index3.html">Demographical</a></li>
                          <li><a href="index4.html">Modern</a></li>
                      </ul>
                  </li>
              </ul>
          </nav>
          <!-- End Sidebar navigation -->
      </div>
      <!-- End Sidebar scroll-->
  </aside>
  <!-- ============================================================== -->
  <!-- End Left Sidebar - style you can find in sidebar.scss  -->
  <!-- ============================================================== -->
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Sidebar extends Vue {
    data(){
        return {
            current: undefined,
        }
    }

    methods() {
        /*setCurrent: function(item) {
            this.current = (this.current == item) ? undefined : item ;
        }*/
    }

}
</script>