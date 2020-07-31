<template>
  <div>
    <button class="btn btn-warning" @click="asyncDecrement({by: 10, duration: 1000})">A Decrement</button>
    <button class="btn btn-success" @click="asyncIncrement({by: 10, duration: 1000})">A Increment</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    methods: {
      ...mapActions([
        'asyncIncrement',
        'asyncDecrement'
      ]),
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
