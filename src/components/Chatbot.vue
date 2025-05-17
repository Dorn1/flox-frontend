<template>
    <div class="chatbot">
        <div class="chatbot__window">
            <div v-for="(msg, index) in messages" :key="index" class="chatbot__message">
                <strong>{{ msg.sender }}:</strong> {{ msg.text }}
            </div>
        </div>
        <div class="chatbot__input">
            <input v-model="input" @keydown.enter="sendMessage" type="text" placeholder="Ask me something...">
            <button @click="sendMessage">Send</button>
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

    messages.value.push({ sender: "You", text: trimmed })

    try {
        const response = await axios.post('http://localhost:8080/dashboard/chatbot', {
            message: trimmed,
        })
    } catch (error) {
        messages.value.push({
            sender: "Fox",
            text: "Sorry, something went wrong. Try again later.",
        })
        console.error(error)
    }
    input.value = ''
}


</script>