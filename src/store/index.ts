import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
const Cookies = require('js-cookie')
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
       auth,
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
    plugins: [
        createPersistedState({
            key: 'deity-academy'
        }),
    ],

    /*plugins: [
        createPersistedState({
            key: 'deity',
            storage: {
                getItem: key => Cookies.getJSON(key),
                setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
                removeItem: key => Cookies.remove(key)
            },
            getState: (key) => Cookies.getJSON(key),
            setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
        })
    ]*/
});