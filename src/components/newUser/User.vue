<template>
  <div>
    <h1>User Component</h1>
    <hr>
    <button class="btn btn-outline-danger" @click="navigateToHome">Go To Home</button>
  </div>
</template>

<script>
  export default {
    methods: {
      navigateToHome() {
        this.$router.push({path: '/'});
      }
    }
  }
</script>

<style scoped>

</style>
