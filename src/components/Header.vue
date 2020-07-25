<template>
  <ul class="nav justify-content-end">
    <li class="nav-item">
      <router-link to="/" class="pr-3">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/user" class="pr-3">User</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/person" class="pr-3">Person</router-link>
    </li>

  </ul>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
