<template>
<div>
  <h3>User Edit Component</h3>
  <p>Local : {{$route.query.local}}</p>
  <p>Analytics : {{$route.query.q}}</p>
</div>
</template>

<script>
    export default {
        name: "UserEdit"
    }
</script>

<style scoped>

</style>
