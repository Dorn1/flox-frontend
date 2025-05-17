<template>
    <div class="container">
        <div class="dashboard">
            <Tools class="tools"/>
            <Calendar class="calendar"/>
            <Chatbot class="chatbot"/>
        </div>
    </div>
</template>

<script setup>
import Chatbot from "../components/Chatbot.vue"
</script>

<style scoped>
@import url("../assets/dashboard.css");
</style>