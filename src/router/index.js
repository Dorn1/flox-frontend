import { createRouter, createWebHistory } from "vue-router";
import Login from '@/views/Login.vue';
import Signup from "@/views/Signup.vue";
import Dashboard from "@/views/Dashboard.vue";
import Chatbot from "@/components/Chatbot.vue"

const routes = [
    { path: "/", redirect: '/login' },
    { path: "/login", component: Login },
    { path: "/register", component: Signup },
    { path: "/dashboard", component: Dashboard,
        children: [
            {
                path: 'chatbot',
                component: Chatbot
            }
        ]
     },
]

export default createRouter({
    history: createWebHistory(),
    routes
})

