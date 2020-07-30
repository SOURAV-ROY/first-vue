<template>
  <div>
    <!--  <p>Counter is : <span>{{ counter }}</span></p>-->
    <p>Counter is : <span>{{ doubleCounter }}</span></p>
    <!--  <p>Number of Clicks is : <span>{{ clicks }}</span></p>-->
    <p>Number of Clicks : <span>{{ stringCounter }}</span></p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    // props: ['counter']
    // computed: {
    //   counter() {
    //     return this.$store.state.counter * 2;
    //   },
    //   clicks(){
    //     return this.$store.getters.stringCounter;
    //   }
    // }
    computed: {
      ...mapGetters([
        'doubleCounter',
        'stringCounter',
      ])
    }
  }
</script>
