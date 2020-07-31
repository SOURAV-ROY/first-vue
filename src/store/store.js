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
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    increment: ({commit}) => {
      commit('increment');
    },
    decrement: ({commit}) => {
      commit('decrement');
    },
    asyncIncrement: ({commit}) => {
      setTimeout(() => {
        commit('increment');
      }, 1000)
    },
    asyncDecrement: ({commit}) => {
      setTimeout(() => {
        commit('decrement');
      }, 1000)
    },
  }
});
