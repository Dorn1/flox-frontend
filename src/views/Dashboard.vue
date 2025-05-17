<template>
    <div class="container">
        <div class="dashboard">
            <Tools class="tools"/>
            <Suspense>
              <Calendar class="calendar"/>
            </Suspense>
            <Chatbot class="chatbot"/>
        </div>
    </div>
</template>

<script setup>
import Chatbot from "../components/Chatbot.vue"
import Tools from "../components/Tools.vue"
import Calendar from "@/components/Calendar.vue";
</script>

<style scoped>
@import url("../assets/dashboard.css");
</style>
