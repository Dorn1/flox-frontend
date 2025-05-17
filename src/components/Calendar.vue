<script setup>
import {useRoute} from 'vue-router';
import {ref} from "vue";
import axios from "axios";
import router from "@/router/index.js";

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


function deleteEvent(event_id) {
  axios.delete("http://localhost:8080/events/deleteEvent?eventId="+event_id);
  router.push("/dashboard/"+id);
}

</script>

<template>
  <div class="calendar">
    <div class="calendar__container">
      <div class="calendar__header">
        <h1>Calendar</h1>
      </div>
      <div class="calendar__body">
      
        <div class="calendar__day">
          <h2>Monday</h2>
          <ul>
            <li>Work</li>
            <li>Work</li>
            <li>Work</li>
            <li>Work</li>
            <li></li>
            <li>Gym</li>
            <li></li>
            <!--<li v-for="event in mondayEvents" :key="event.id">
              {{ event.title }} - {{ event.description }}
            </li>-->
          </ul>
        </div>
        <div class="calendar__day">
          <h2>Tuesday</h2>
          <ul>
            <li>Work</li>
            <li>Work</li>
            <li>Work</li>
            <li>Work</li>
            <li></li>
            <li>Friends Meeting</li>
            <li></li>
            <!--<li v-for="event in TuesdayEvents" :key="event.id">
              {{ event.title }} - {{ event.description }}
            </li>-->
          </ul>
        </div>
        <div class="calendar__day">
          <h2>Wednesday</h2>
          <ul>
            <li>Work</li>
            <li>Work</li>
            <li>Work</li>
            <li>Work</li>
            <li>Family dinner</li>
            <li></li>
            <li>Football Workout</li>
            <!--<li v-for="event in mondayEvents" :key="event.id">
              {{ event.title }} - {{ event.description }}
            </li>-->
          </ul>
        </div>
        <div class="calendar__day">
          <h2>Thursday</h2>
          <ul>
            <li>Work</li>
            <li>Work</li>
            <li>Work</li>
            <li>Work</li>
            <li></li>
            <li></li>
            <li>Movie Night</li>
            <!--<li v-for="event in mondayEvents" :key="event.id">
              {{ event.title }} - {{ event.description }}
            </li>-->
          </ul>
        </div>
        <div class="calendar__day">
          <h2>Friday</h2>
          <ul>
            <li>Work</li>
            <li>Work</li>
            <li>Work</li>
            <li>Work</li>
            <li></li>
            <li></li>
            <li>Spanish Lesson</li>
            <!--<li v-for="event in mondayEvents" :key="event.id">
              {{ event.title }} - {{ event.description }}
            </li>-->
          </ul>
        </div>
        <div class="calendar__day">
          <h2>Saturday</h2>
          <ul>
            <li>House Cleaning</li>
            <li>House Cleaning</li>
            <li></li>
            <li>Family meeting</li>
            <li></li>
            <li>Party</li>
            <li>Party</li>
            <!--<li v-for="event in mondayEvents" :key="event.id">
              {{ event.title }} - {{ event.description }}
            </li>-->
          </ul>
        </div>
        <div class="calendar__day">
          <h2>Sunday</h2>
          <ul>
            <li>Running Workout</li>
            <li></li>
            <li></li>
            <li>Football match</li>
            <li></li>
            <li></li>
            <li></li>
            <!--<li v-for="event in mondayEvents" :key="event.id">
              {{ event.title }} - {{ event.description }}
            </li>-->
          </ul>
        </div>
        <ul>
          <li>7</li>
          <li>9</li>
          <li>11</li>
          <li>13</li>
          <li>15</li>
          <li>17</li>
          <li>19</li>
          <li>21</li>
        </ul>
        <!-- Repeat for other days -->
      </div>
    </div>
  </div>
  <!--<main>
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
            <button @click="deleteEvent(item[0].id)" class="delete">delete</button>
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
              <button @click="deleteEvent(item[0].id)" class="delete">delete</button>
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
              <button @click="deleteEvent(item[0].id)" class="delete">delete</button>
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
              <button @click="deleteEvent(item[0].id)" class="delete">delete</button>
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
              <button @click="deleteEvent(item[0].id)" class="delete">delete</button>
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
              <button @click="deleteEvent(item[0].id)" class="delete">delete</button>
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
              <button @click="deleteEvent(item[0].id)" class="delete">delete</button>
            </div>
          </ul>
        </div>
      </tr>
    </table>
  </main>-->
</template>

<style scoped>
@import url("../assets/calendar.css");
/*.dayTag{
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
}*/
</style>
