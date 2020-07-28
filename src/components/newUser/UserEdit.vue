<template>
<div>
  <h3>User Edit Component</h3>
  <p>Local : {{$route.query.local}}</p>
  <p>Analytics : {{$route.query.q}}</p>
  <button class="btn btn-outline-success">Confirm</button>
  <div class="border border-primary" style="height: 700px"></div>
  <p id="data" class="border border-danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, soluta.</p>
</div>
</template>

<script>
    export default {
        name: "UserEdit"
    }
</script>

<style scoped>

</style>
