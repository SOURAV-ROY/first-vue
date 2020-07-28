<template>
  <div>
    <h2>User Details</h2>
    <hr>
    <h3 class="text-success">User loaded ID: {{$route.params.id}}</h3>
    <hr>
    <router-link
      class="btn btn-outline-warning"
      tag="button"
      :to="link"
    >Add New User
      <!--      :to="'/user/'+$route.params.id+'/edit'"-->
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: {
            id: this.$route.params.id
          },
          query: {
            local: 'en',
            q: 100
          },
          hash: '#data'
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      if (true) {
        console.log("If True");
        next()
      } else {
        next(false);
      }
    }
  }
</script>

<style scoped>

</style>
