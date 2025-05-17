<script setup>
import { useRoute } from 'vue-router';
import { ref } from "vue";
import axios from "axios";

const route = useRoute();
const id = route.params.id;
let startDay;
let today = new Date();
const mondayEvents = ref([]);
await axios.post("http://localhost:8080//getEventsByDay",{userId:1,
  day:"2025-05-12T00:00:00.000Z"}).then((response) => {mondayEvents.value = response.data;});

</script>

<template>
  <main>
    {{monday}}
  </main>
</template>

<style scoped>
main{
  color: orange;
}
</style>
