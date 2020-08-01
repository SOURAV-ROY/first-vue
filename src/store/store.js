import Vue from "vue";
import VueX from 'vuex';
import counter from "./modules/counter";

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(VueX);

export const store = new VueX.Store({
  state: {
    counter: 0,
    value: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    counter: counter
  }
  // getters: {
  // doubleCounter: state => {
  //   return state.counter * 10;
  // },
  // stringCounter: state => {
  //   return state.counter + " Clicks";
  // },
  //   value: state => {
  //     return state.value;
  //   }
  // },

  // mutations: {
  // increment: (state, payload) => {
  //   state.counter += payload;
  // },
  // decrement: (state, payload) => {
  //   state.counter -= payload;
  // },
  //   updateValue: (state, payload) => {
  //     state.value = payload;
  //   }
  // },

  // actions: {
  // increment: ({commit}, payload) => {
  //   commit('increment', payload);
  // },
  // decrement: ({commit}, payload) => {
  //   commit('decrement', payload);
  // },
  // asyncIncrement: ({commit}, payload) => {
  //   setTimeout(() => {
  //     commit('increment', payload.by);
  //   }, payload.duration)
  // },
  // asyncDecrement: ({commit}, payload) => {
  //   setTimeout(() => {
  //     commit('decrement', payload.by);
  //   }, payload.duration)
  // },
  // updateValue({commit}, payload) {
  //   commit('updateValue', payload)
  // },
  // },

});
