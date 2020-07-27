<template>
  <div>
    <h2>User Details</h2>
    <hr>
    <h3 class="text-success">User loaded ID: {{$route.params.id}}</h3>
    <hr>
    <router-link
      class="btn btn-outline-warning"
      tag="button"
      :to="{name:'userEdit', params: {id: $route.params.id}, query:{local: 'en', q: 100}}"
    >Add New User
      <!--      :to="'/user/'+$route.params.id+'/edit'"-->
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "UserDetail"
  }
</script>

<style scoped>

</style>
