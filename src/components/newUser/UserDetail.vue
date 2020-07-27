<template>
  <div>
    <h2>User Details</h2>
    <hr>
    <h3 class="text-success">User loaded ID: {{$route.params.id}}</h3>
    <router-link
      tag="button"
      :to="'/user/'+$route.params.id+'/edit'"
    >Add New User
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
