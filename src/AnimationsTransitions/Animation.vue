<template>
  <div class="col-12 text-center">
    <button class="btn btn-info mt-2" @click="show = !show">Show Alert</button>
    <transition name="sou">
      <div class="alert alert-primary mt-2" role="alert"
           v-if="show"
      >
        A simple primary alert—check it out!
      </div>
    </transition>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        'show': false
      };
    }
  }
</script>

<style scoped>
  .sou-enter {
    opacity: 0;
  }

  .sou-enter-active {
    transition: opacity 2s;
  }

  .sou-leave {
    /*opacity: 1;*/
  }

  .sou-leave-active {
    transition: opacity 2s;
    opacity: 0;
  }
</style>
