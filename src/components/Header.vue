<template>
  <!--  <ul class="nav nav-pills" style="font-size: 22px">-->
  <!--      <router-link to="/" class="pr-3">Home</router-link>-->
  <!--      <router-link to="/user" class="pr-3">User</router-link>-->
  <!--&lt;!&ndash;      <router-link to="/user/2" class="pr-3">User 2</router-link>&ndash;&gt;-->

  <!--  </ul>-->
  <nav class="site-header sticky-top py-1">
    <div class="d-flex flex-column flex-md-row justify-content-between">
      <router-link to="/" class="py-2 d-none d-md-inline-block" href="#">HOME</router-link>
      <router-link to="/user" class="py-2 d-none d-md-inline-block" href="#">User</router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
