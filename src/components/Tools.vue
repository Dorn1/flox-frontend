<template>
    <aside class="tools">
        <h2 class="tools__title">Tools</h2>

        <ul class="tools__list">
            <li :class="{ active: selected === 'suggest' }" @click="select('suggest')">
                Suggest Event Time
            </li>
        </ul>

        <transition name="fade">
            <form v-if="selected === 'suggest'" @submit.prevent="onSubmit" class="tools__form">
                <div class="tools__form-title">
                    <label for="title">title:</label>
                    <input id="title" v-model="form.title" type="text" required/>
                </div>

                <div class="tools__duration-inputs">
                    <label>needed duration:</label>
                    <div class="duration-inputs__numbers">
                        <div class="duration-inputs__input">
                            <input v-model.number="form.durationHours" type="number" min="0" class="duration-field"/> h
                        </div>
                        <div class="duration-inputs__input">
                            <input v-model.number="form.durationMinutes" type="number" min="0" max="59" class="duration-field"/> m
                        </div>
                    </div>
                </div>

                <div class="tools__occurancy">
                    <label for="occurrences">occurrences:</label>
                    <input id="occurrences" v-model.number="form.occurrences" type="number" min="1" required/>
                </div>

                <div class="tools__deadline">
                    <label for="deadline">deadline:</label>
                    <input id="deadline" v-model="form.deadline" type="datetime-local" required/>
                </div>

                <button type="submit" class="tools__button">send</button>
            </form>
        </transition>

          {{suggestedEvents}}
    </aside>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'

  // which tool is active
const selected = ref(null)

  // the form model
const form = reactive({
    title: '',
    neededDuration: '',   // ISO-8601, e.g. "PT1H"
    occurrences: 1,
    deadline: ''          // YYYY-MM-DDTHH:mm
})

let suggestedEvents = '';

function select(option) {
    selected.value = selected.value === option ? null : option
}

function computeIsoDuration(durationHours, durationMinutes) {
    const h = durationHours || 0
    const m = durationMinutes || 0
    let s = 'PT'
    if (h > 0) s += `${h}H`
    if (m > 0) s += `${m}M`
    if (h === 0 && m === 0) s += '0M'
    return s
}


  // helper for display or comparisons
function formatDate(dt) {
    return dt.toLocaleString()
}

  // on form submit
async function onSubmit() {

      // build the wrapper DTO
    const payload = {
        week: {
        id: 1,
        startDate:  "2025-05-19T00:00:00",
        endDate:    "2025-05-25T23:59:59",
        events: [
            { id: 11, title: "Movie Night",        description: "Watching a new thriller",         eventType: "CHILL",             startTime: new Date("2025-05-20T07:00:00"), endTime: new Date("2025-05-20T23:30:00") },
            { id: 5,  title: "Meditation",         description: "Mindfulness and breathing exercises", eventType: "CHILL",             startTime: new Date("2025-05-20T07:00:00"), endTime: new Date("2025-05-20T23:30:00") },
            { id: 7,  title: "Book Reading",       description: "Reading 'Clean Code'",               eventType: "CHILL",             startTime: new Date("2025-05-20T18:00:00"), endTime: new Date("2025-05-20T23:00:00") },
            { id: 18, title: "Podcast Listening",  description: "Latest episode of 'Deep Tech'",      eventType: "CHILL",             startTime: new Date("2025-05-24T20:00:00"), endTime: new Date("2025-05-24T21:00:00") },
            { id: 3,  title: "Guitar Practice",    description: "Practicing fingerstyle techniques",  eventType: "HOBBY",             startTime: new Date("2025-05-19T17:00:00"), endTime: new Date("2025-05-19T18:30:00") },
            { id: 9,  title: "Art Class",          description: "Watercolor techniques workshop",     eventType: "HOBBY",             startTime: new Date("2025-05-21T17:00:00"), endTime: new Date("2025-05-21T19:00:00") },
            { id: 14, title: "Gardening",          description: "Planting tomatoes and herbs",        eventType: "HOBBY",             startTime: new Date("2025-05-22T16:00:00"), endTime: new Date("2025-05-22T17:30:00") },
            { id: 19, title: "Photography Walk",   description: "Sunset shots around the city",       eventType: "HOBBY",             startTime: new Date("2025-05-25T18:30:00"), endTime: new Date("2025-05-25T20:00:00") },
            { id: 4,  title: "Dinner with Friends",description: "Catching up with high school friends", eventType: "SOCIAL_ACTIVITY", startTime: new Date("2025-05-19T20:00:00"), endTime: new Date("2025-05-19T22:00:00") },
            { id: 13, title: "Coffee Catch‑Up",     description: "Meet‑up with mentor",               eventType: "SOCIAL_ACTIVITY",   startTime: new Date("2025-05-22T09:30:00"), endTime: new Date("2025-05-22T10:30:00") },
            { id: 16, title: "Call Mom",           description: "Weekly check‑in call",             eventType: "SOCIAL_ACTIVITY",   startTime: new Date("2025-05-23T19:00:00"), endTime: new Date("2025-05-23T19:30:00") },
            { id: 1,  title: "Morning Jog",        description: "Jogging in the park",              eventType: "PHYSICAL_ACTIVITY", startTime: new Date("2025-05-19T06:30:00"), endTime: new Date("2025-05-19T07:15:00") },
            { id: 8,  title: "Swimming",           description: "Lap swimming at the pool",         eventType: "PHYSICAL_ACTIVITY", startTime: new Date("2025-05-21T07:30:00"), endTime: new Date("2025-05-21T08:30:00") },
            { id: 12, title: "Basketball Game",    description: "Weekly match with local team",     eventType: "PHYSICAL_ACTIVITY", startTime: new Date("2025-05-22T18:00:00"), endTime: new Date("2025-05-22T20:00:00") },
            { id: 17, title: "Yoga Session",       description: "Vinyasa flow",                     eventType: "PHYSICAL_ACTIVITY", startTime: new Date("2025-05-24T07:00:00"), endTime: new Date("2025-05-24T08:00:00") },
            { id: 20, title: "Weekly Review",      description: "Reflecting and planning next week",eventType: "OTHER",             startTime: new Date("2025-05-25T21:00:00"), endTime: new Date("2025-05-25T22:00:00") },
            { id: 2,  title: "Team Meeting",       description: "Weekly team sync‑up",              eventType: "WORK",              startTime: new Date("2025-05-19T09:00:00"), endTime: new Date("2025-05-19T20:00:00") },
            { id: 6,  title: "Coding Session",     description: "Working on Java backend project",  eventType: "WORK",              startTime: new Date("2025-05-20T10:00:00"), endTime: new Date("2025-05-20T23:00:00") },
            { id: 10, title: "Freelance Meeting",  description: "Discuss UI design with client",    eventType: "WORK",              startTime: new Date("2025-05-21T14:00:00"), endTime: new Date("2025-05-21T23:00:00") },
            { id: 15, title: "Conference",         description: "Online tech leadership summit",    eventType: "WORK",              startTime: new Date("2025-05-23T08:00:00"), endTime: new Date("2025-05-23T23:00:00") }
        ], user: {
            id: 1,
            username: "janedoe"
        }
    },
        requestedEvent: {
            title:          form.title,
            neededDuration: computeIsoDuration(form.durationHours, form.durationMinutes), // e.g. "PT1H30M"
            occurrences:    form.occurrences,        // e.g. 3
            deadline:       new Date(form.deadline)          // "YYYY-MM-DDTHH:mm"
        }
    }

    try {
        console.log('Sending payload:', payload)
        const response = await axios.post(
        'http://localhost:8080/events/suggest-event-time',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
    )

      suggestedEvents = response.data;
      messages.value.push({ sender: "flox", text: suggestedEvents })

      console.log('Suggested events:', suggestedEvents)

        // handle the response as needed
        // e.g. update the UI, show a notification, etc.
        // for example, you could set a state variable to show the suggested events 
      // you could also emit an event or display it in the UI
    } catch (err) {
        console.error('Error calling suggest-event-time:', err)
    }
}
</script>

<style scoped>
@import url("../assets/tools.css");
</style>
