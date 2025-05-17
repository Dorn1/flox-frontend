<template>
    <div class="container">
        <img src="../assets/fox.svg" alt="FLOX" class="image">
        <div class="login auth-from">
            <h2 class="auth-form__title login__title">Login</h2>
            <form @submit.prevent="login">
                <div class="input-container">
                    <label for="username">Username:</label>
                    <input v-model="username" type="text" id="username" placeholder="Username" required>
                </div>
                <div class="input-container">
                    <label for="password">Password:</label>
                    <input v-model="password" type="password" id="password" placeholder="Password" required>
                </div>
                <button type="submit">Login</button>
            </form>
            <p v-if="errorMessage" class="error"> {{ errorMessage }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const login = async () => {
    try {
        const response = await axios.get('http://localhost:8080/login', {
            params: {
                username: username.value,
                password: password.value
            }
        })
        const userId = response.data
        console.log('Logged in, user ID:', userId)

        router.push('/dashboard/'+userId)
    } catch (error) {
        if (error.response && error.response.status === 401) {
            errorMessage.value = 'Invalid credentails. PLease try again.'
        } else {
            errorMessage.value = 'Login failed. Please check your connection.'
        }
    }
}
</script>

<style scoped>
@import url("../assets/login-signup.css");
</style>