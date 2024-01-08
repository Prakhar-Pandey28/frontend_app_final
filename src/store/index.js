import api from '../services/api'; // Ensure the correct path to your api.js file

const actions = {
    async login({ commit }, userData) {
      const response = await api.post('/login', userData);
      commit('setUser', response.data.user);
      return response.data;
    },
    async signup(_, userData) {
      const response = await api.post('/signup', userData);
      return response.data;
  },
  // Other actions...
};

export default {
  actions,
  // Other Vuex properties...
};
