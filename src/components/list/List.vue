<template>
  <div>
    <h1>Second Filter</h1>
    <input type="text" v-model="filterText">
    <ol>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        fruits: ['Apple', 'Banana', 'Orange', 'Lemon', 'Mango'],
        filterText: ''
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter((element) => {
          return element.match(this.filterText);
        });
      }
    },
  }
</script>

<style>
</style>
