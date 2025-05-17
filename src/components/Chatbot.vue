<template>
    <div class="chatbot">
        <img src="../assets/fox.svg" alt="FLOX" class="chatbot__image">
        <div class="chatbot-view__container">
            <div class="chatbot__window">
                <div v-for="(msg, index) in messages" :key="index" class="chatbot__message">
                    <span class="chatbot__sender">{{ msg.sender }}:</span> <span class="chatbot__text">{{ msg.text }}</span>
                </div>
            </div>
        </div>
        <div class="chatbot-control__container">
            <div class="chatbot__control">
                <input v-model="input" @keydown.enter="sendMessage" type="text" placeholder="Ask me something..." class="chatbot__input">
                <button @click="sendMessage" class="chatbot__button">send</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const input = ref('')
const messages = ref([])

const sendMessage = async () => {
    const trimmed = input.value.trim()
    if (!trimmed) return

    messages.value.push({ sender: "you", text: trimmed })

    try {
        const response = await axios.post('http://localhost:8080/chatbot', {
            message: trimmed,
        })

        messages.value.push({
            sender: "flox",
            text: response.data,
        })
    } catch (error) {
        messages.value.push({
            sender: "flox",
            text: "Sorry, something went wrong. Try again later.",
        })
        console.error(error)
    }
    input.value = ''
}


</script>

<style scoped>
@import url("../assets/chatbot.css");
</style>