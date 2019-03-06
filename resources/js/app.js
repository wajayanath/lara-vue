
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform'
import moment from 'moment';
import VueProgressBar from 'vue-progressbar'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.Toast = Toast;

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

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
const options = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'left',
    inverse: false
}

Vue.use(VueProgressBar, options)

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});

Vue.filter('upText', function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter('myDate', function(created) {
    return moment(created).format('MMMM Do YYYY');
});


    window.Fire = new Vue();

const app = new Vue({
    el: '#app',
    router
});

