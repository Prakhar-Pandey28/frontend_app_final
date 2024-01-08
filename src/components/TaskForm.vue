<template>
    <form @submit.prevent="addTask">
      <input type="text" v-model="taskTitle" placeholder="Task Title" required>
      <textarea v-model="taskDescription" placeholder="Task Description"></textarea>
      <button type="submit">Add Task</button>
    </form>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        taskTitle: '',
        taskDescription: '',
      };
    },
    methods: {
      ...mapActions(['addTask']),
      async addTask() {
        try {
          const taskData = {
            title: this.taskTitle,
            description: this.taskDescription,
          };
          await this.addTask(taskData);
          // Handle successful task addition (e.g., update task list)
        } catch (error) {
          // Handle task addition error (e.g., display error message)
        }
      },
    },
  };
  </script>
  