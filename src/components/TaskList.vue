<template>
    <div>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['tasks']),
    },
    created() {
      // Fetch tasks from Vuex store (assuming you've stored tasks in state)
      // You may dispatch an action to fetch tasks from the backend here
    },
  };
  </script>
  