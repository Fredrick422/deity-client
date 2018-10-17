import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import calendar from './views/calendar/main.vue';

const title = process.env.VUE_APP_TITLE

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: title,
        tags: [{
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
        ]
      }
    },
    {
      path: '/calendar',
      name: 'calender',
      component: calendar,
      meta: {
        title: 'Calendar | ' + title,
          tags: [{
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
  ],
});
