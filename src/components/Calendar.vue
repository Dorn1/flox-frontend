<script setup>
import {watch} from "vue";
import { useRoute } from 'vue-router';
import { ref, onMounted } from "vue";
import axios from "axios";

const route = useRoute();
const id = route.params.id;
let startDay;
let today = new Date();
let previousMonday = new Date(today.getTime() - (((today.getDay()+6)%7) * 1000*60*60*24))
const mondayEvents = ref([]);
let monday = axios.get("http://localhost:8080//getEventsByDay",{params:{userId:1,day:previousMonday.toString()}}).then((res)=>{mondayEvents.value = res.data});

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
