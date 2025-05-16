import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../view/LogInView.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "logIn",
            component: LoginView,
        }
    ],
    });

export default router;