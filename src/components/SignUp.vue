<template>
    <form @submit.prevent="registerUser">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required>
      <button type="submit">Register</button>
    </form>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      ...mapActions(['signup']),
      async registerUser() {
        try {
          if (this.password !== this.confirmPassword) {
            // Handle password mismatch error
            return;
          }
          const userData = {
            username: this.username,
            password: this.password,
          };
          await this.signup(userData);
          // Handle successful signup (e.g., redirect user)
        } catch (error) {
          // Handle signup error (e.g., display error message)
        }
      },
    },
  };
  </script>
  