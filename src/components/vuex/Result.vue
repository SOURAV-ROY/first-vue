<template>
  <p>Counter is : <span>{{ counter }}</span></p>
</template>

<script>
  export default {
    // props: ['counter']
    computed: {
      counter() {
        return this.$store.state.counter;
      }
    }
  }
</script>
