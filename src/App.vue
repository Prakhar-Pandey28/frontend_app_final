<template>
  <div id="app">
    <!-- Replace or include your components here -->
    <LogIn />
    <SignUp />
    <TaskList />
    <TaskForm />
  </div>
</template>

<script>
// Import the components
import LogIn from './components/LogIn.vue';
import SignUp from './components/SignUp.vue';
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';

export default {
  name: 'App',
  components: {
    // Register the components
    LogIn,
    SignUp,
    TaskList,
    TaskForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
