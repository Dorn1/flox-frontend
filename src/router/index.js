import { createRouter, createWebHistory } from "vue-router";
import Login from '@/views/Login.vue';
import Signup from "@/views/Signup.vue";
import Dashboard from "@/views/Dashboard.vue";

const routes = [
    { path: "/", redirect: '/register' },
    { path: "/login", component: Login },
    { path: "/register", component: Signup },
    { path: "/dashboard", component: Dashboard},
]

export default createRouter({
    history: createWebHistory(),
    routes
})

