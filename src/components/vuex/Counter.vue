<template>
  <div>
    <button class="btn btn-warning" @click="decrement">Decrement</button>
    <button class="btn btn-success" @click="increment">Increment</button>
  </div>
</template>

<script>
  export default {
    methods: {
      increment() {
        // this.$emit('updated', 2);
        this.$store.state.counter++;
      },
      decrement() {
        // this.$emit('updated', -2);
        this.$store.state.counter--;
      }
    }
  }
</script>
