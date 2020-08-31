import Vue from 'vue';
import Vuex from 'vuex';
import pokemons from './modules/pokemons';
import cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { pokemons, cart },
});
