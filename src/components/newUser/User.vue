<template>
  <div>
    <h1>User Component</h1>
    <hr>
    <h4>Loaded ID : {{id}}</h4>
    <button class="btn btn-outline-danger" @click="navigateToHome">Go To Home</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    watch: {
      '$route'(to, from) {
          this.id = to.params.id;
      }
    },
    methods: {
      navigateToHome() {
        this.$router.push({path: '/'});
      }
    }
  }
</script>

<style scoped>

</style>
