<!--<template>-->
<!--  <div class="container">-->
<!--    <div class="row">-->
<!--      <div class="col-xs-12">-->
<!--        <app-user></app-user>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="container">
    <div>hallo quota</div>
  </div>
</template>

<script>
  import User from './components/user/User.vue';

  export default {
    components: {
      appUser: User
    }
  }
</script>

<style>
  div.component {
    border: 1px solid black;
    padding: 30px;
  }
</style>
