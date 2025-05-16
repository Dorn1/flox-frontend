<template>
    <div class="signup auth-form">
        <h2 class="auth-form__title signup__title">Sign Up</h2>
        <form @submit.prevent="signup">
            <div>
                <label for="username">Username:</label>
                <input v-model="username" type="text" id="username" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input v-model="password" type="password" id="password" required>
            </div>
            <button type="submit">Register</button>
            <p v-if="successMessage" class="success">{{ successMessage }}</p>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
        <RouterLink to="/">Already have an account? Log in here.</RouterLink>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const successMessage = ref('')
const errorMessage = ref('')
const router = useRouter()

const signup = async () => {
    successMessage.value = ''
    errorMessage.value = ''

    try {
        const response = await axios.post('http://localhost:8080/register', null, {
            params: {
                user: username.value,
                password: password.value
            }
        })

        successMessage.value = response.data
        setTimeout(() => {
            router.push('/login')
        }, 1500);
    } catch (error) {
        if (error.response && error.response.status === 409) {
            errorMessage.value = 'Username already exists.'
        } else {
            errorMessage.value = 'Signup failed. Please try again'
        }
    }
}
</script>