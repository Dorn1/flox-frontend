<script setup>
import {useRoute} from 'vue-router';
import {ref} from "vue";
import axios from "axios";

const route = useRoute();
const id = route.params.id;
let startDay;
let today = new Date();
const mondayEvents = ref([]);
const TuesdayEvents = ref([]);
const wednesdayEvents = ref([]);
const ThursdayEvents = ref([]);
const FridayEvents = ref([]);
const SaturdayEvents = ref([]);
const SundayEvents = ref([]);
  let response = await axios.post("http://localhost:8080/getEventsByDay?userId="+id+"&day=2025-05-12T00:00:00");
  mondayEvents.value.push(response.data);

  let response1 = await axios.post("http://localhost:8080/getEventsByDay?userId="+id+"&day=2025-05-13T00:00:00");
  TuesdayEvents.value.push(response1.data);

  let response2 = await axios.post("http://localhost:8080/getEventsByDay?userId="+id+"&day=2025-05-14T00:00:00");
  wednesdayEvents.value.push(response2.data);

  let response3 = await axios.post("http://localhost:8080/getEventsByDay?userId="+id+"&day=2025-05-15T00:00:00");
  ThursdayEvents.value.push(response3.data);

  let response4 = await axios.post("http://localhost:8080/getEventsByDay?userId="+id+"&day=2025-05-16T00:00:00");
  FridayEvents.value.push(response4.data);

  let response5 = await axios.post("http://localhost:8080/getEventsByDay?userId="+id+"&day=2025-05-17T00:00:00");
  SaturdayEvents.value.push(response5.data);

  let response6 = await axios.post("http://localhost:8080/getEventsByDay?userId="+id+"&day=2025-05-18T00:00:00");
  SundayEvents.value.push(response6.data);


function deleteEvent(id) {
  axios.delete(`http://localhost:8080/deleteEvent/${id}`);
  route("/dashboard/"+id).push();
}

</script>

<template>
  <main>
    <table>
      <tr>
      <div class="dayTag">
        MONDAY
      </div>
      <div v-if="mondayEvents[0].length >0" class="table">
        <ul v-for="item in mondayEvents">
          <div class="card">
            Title: {{ item[0].title }}
            Description: {{ item[0].description }}
          </div>
        </ul>
      </div>
      </tr>
      <tr>
        <div class="dayTag">
          TUESDAY
        </div>
        <div v-if="TuesdayEvents[0].length >0" class="table">
          <ul v-for="item in TuesdayEvents">
            <div class="card">
              Title: {{ item[0].title }}
              Description: {{ item[0].description }}
            </div>
          </ul>
        </div>
      </tr>
      <tr>
        <div class="dayTag">
          WEDNESDAY
        </div>
        <div v-if="wednesdayEvents[0].length >0" class="table">
          <ul v-for="item in wednesdayEvents">
            <div class="card">
              Title: {{ item[0].title }}
              Description: {{ item[0].description }}
            </div>
          </ul>
        </div>
      </tr>
      <tr>
        <div class="dayTag">
          THURSDAY
        </div>
        <div v-if="ThursdayEvents[0].length >0" class="table">
          <ul v-for="item in ThursdayEvents">
            <div class="card">
              Title: {{ item[0].title }}
              Description: {{ item[0].description }}
            </div>
          </ul>
        </div>
      </tr>
      <tr>
        <div class="dayTag">
          FRIDAY
        </div>
        <div v-if="FridayEvents[0].length >0" class="table">
          <ul v-for="item in FridayEvents">
            <div class="card">
              Title: {{ item[0].title }}
              Description: {{ item[0].description }}
            </div>
          </ul>
        </div>
      </tr>
      <tr>
        <div class="dayTag">
          SATURDAY
        </div>
        <div v-if="SaturdayEvents[0].length >0" class="table">
          <ul v-for="item in SaturdayEvents">
            <div class="card">
              Title: {{ item[0].title }}
              Description: {{ item[0].description }}
            </div>
          </ul>
        </div>
      </tr>
      <tr>
        <div class="dayTag">
          SUNDAY
        </div>
        <div v-if="SundayEvents[0].length >0" class="table">
          <ul v-for="item in SundayEvents">
            <div class="card">
              Title: {{ item[0].title }}
              Description: {{ item[0].description }}
            </div>
          </ul>
        </div>
      </tr>
    </table>
  </main>
</template>

<style scoped>
.dayTag{
  background-color: #c2185b;
  color: white;
  padding: 2px;
}
.card {
  color: white;
  background-color: #c2185b;
  padding: 2px;
  margin-top: 3px;
  margin-bottom: 3px;
}
li{

}
table {
  display: table;
}

table tr {
  display: table-cell;
}

table tr td {
  display: block;
}
</style>
