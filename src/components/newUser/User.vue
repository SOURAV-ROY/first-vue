<template>
  <div>
    <h1>User Component</h1>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, modi!</p>
    <!--    <h4>Loaded ID : {{id}}</h4>-->
    <button class="btn btn-outline-danger" @click="navigateToHome">Go To Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // data() {
    //   return {
    //     id: this.$route.params.id
    //   }
    // },
    // watch: {
    //   '$route'(to, from) {
    //       this.id = to.params.id;
    //   }
    // },
    methods: {
      navigateToHome() {
        this.$router.push({path: '/'});
      }
    }
  }
</script>

<style scoped>

</style>
