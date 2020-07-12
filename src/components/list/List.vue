<template>
  <div>
    <h1>Second Filter And Mixins</h1>
    <input type="text" v-model="filterText">
    <ol>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ol>
  </div>
</template>

<script>
  import {fruitMixin} from "./fruitMixin";

  export default {
    mixins: [fruitMixin],
    created() {
      console.log('Inside List Created Hook !!!')
    }
  }
</script>

<style>
</style>
