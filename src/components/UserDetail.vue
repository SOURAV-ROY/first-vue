<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <!--      <p>Your Name : {{myName}}</p>-->
    <p>Your Name : {{switchName()}}</p>
    <button @click="resetName()">Reset Name</button>
  </div>
</template>

<script>
  export default {
    // props:['myName'],
    props: {
      // myName: String
      myName: {
        type: String,
        // required: true,
        default: "Sourav Roy"
      }
    },
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("")
      },
      resetName(){
        this.myName = "Sourav";
        this.$emit('nameWasReset', this.myName)
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
