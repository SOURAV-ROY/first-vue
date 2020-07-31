import Vue from "vue";
import VueX from 'vuex';

Vue.use(VueX);

export const store = new VueX.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 10;
    },
    stringCounter: state => {
      return state.counter + " Clicks";
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    }
  },
  actions: {
    increment: ({commit}, payload) => {
      commit('increment', payload);
    },
    decrement: ({commit}, payload) => {
      commit('decrement', payload);
    },
    asyncIncrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.duration)
    },
    asyncDecrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.duration)
    },
  }
});
