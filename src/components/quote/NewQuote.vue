<template>
  <div class="row">
    <form>
      <div class="form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" cols="50" v-model="quote"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary form-control" @click.prevent="createNew">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        quote: ''
      };
    },
    methods: {
      createNew() {
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }
  }
</script>

<style>

</style>
