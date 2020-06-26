<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <!--      <p>Your Name : {{myName}}</p>-->
    <p>Your Name : {{switchName()}}</p>

    <h3>User Age: {{userAge}}</h3>

    <button @click="resetName()">Reset Name</button>
    <button @click="resetFn">Reset Name</button>
  </div>
</template>

<script>
  import {eventBus} from "../main";

  export default {
    // props:['myName'],
    props: {
      // myName: String
      myName: {
        type: String,
        // required: true,
        // default: "Sourav Roy"
      },
      resetFn: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("")
      },
      resetName() {
        this.myName = "Sourav";
        this.$emit('nameWasReset', this.myName)
      }
    },
    created() {
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
