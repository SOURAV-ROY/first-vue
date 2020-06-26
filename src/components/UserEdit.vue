<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <h4>User Age: {{userAge}}</h4>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
  import {eventBus} from "../main";

  export default {
    props:['userAge'],
    // props:{
    //   userAge:{
    //     type: Number
    //   }
    // },
    methods: {
      editAge() {
        this.userAge= 29;
        // this.$emit('ageWasEdited', this.userAge);
        // eventBus.$emit('ageWasEdited', this.userAge);
        eventBus.changeAge(this.userAge);
      }

    }
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>
