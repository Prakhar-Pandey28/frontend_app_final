<template>
    <form @submit.prevent="loginUser">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      ...mapActions(['login']),
      async loginUser() {
        try {
          const userData = {
            username: this.username,
            password: this.password,
          };
          await this.login(userData);
          // Handle successful login (e.g., redirect user)
        } catch (error) {
          // Handle login error (e.g., display error message)
        }
      },
    },
  };
  </script>
  