import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue';
import Signup from "../views/Signup.vue";
import Home from '../views/Home.vue';

const routes = [
    { path: "/", redirect: '/login' },
    { path: "/login", component: Login },
    { path: "/register", component: Signup },
    { path: "/home", component: Home },
]

export default createRouter({
    history: createWebHistory(),
    routes
})

