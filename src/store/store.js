import Vue from "vue";
import VueX from 'vuex';

Vue.use(VueX);

export const store = new VueX.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 4;
    }
  }
});
