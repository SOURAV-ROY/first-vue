<template>
  <div class="alert alert-success text-center pb-3" style="border: 2px solid green">
    <h1>That's Correct!</h1>
    <hr>
    <button class="btn btn-primary" @click="onNextQuestion">Next Question</button>
  </div>
</template>
<style>

</style>
<script>

  export default{
    methods: {
      onNextQuestion() {
        this.$emit('confirmed');
      }
    }
  }
</script>
