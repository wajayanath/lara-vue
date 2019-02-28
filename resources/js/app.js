
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Users from './components/Users.vue'
import Profile from './components/Profile.vue'

Vue.use(VueRouter);

let routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/users', component: Users },
    { path: '/profile', component: Profile }
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});

const app = new Vue({
    el: '#app',
    router
});

