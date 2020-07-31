<template>
  <div>
    <button class="btn btn-outline-danger" @click="decrement">Decrement</button>
    <button class="btn btn-outline-info" @click="increment(500)">Increment</button>
  </div>
</template>

<script>
  import {mapMutations, mapActions} from 'vuex';

  export default {
    methods: {
      ...mapMutations([
        'increment',
        'decrement'
      ]),
      ...mapActions([
        'increment',
        'decrement'
      ]),
      increment(by){
        this.$store.dispatch('increment',by);
      },
      // increment() {
      //   // this.$emit('updated', 2);
      //   // this.$store.state.counter +=2 ;
      //   this.$store.commit('increment');
      // },
      // decrement() {
      //   // this.$emit('updated', -2);
      //   // this.$store.state.counter--;
      //   this.$store.commit('decrement');
      // }
    }
  }
</script>
