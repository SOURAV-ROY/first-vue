<template>
  <div class="container" style="border: 1px solid green">
    <!--    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>-->
    <!--    <app-new-quote @quoteAdded="newQuote"></app-new-quote>-->
    <!--    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>-->
    <!--    <div class="row">-->
    <!--      <div class="col-sm-12 text-center">-->
    <!--        <div class="alert alert-info">Info: Click on a Quote to delete it!</div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="row">-->
    <!--      <div class="col-md-12 text-center">-->
    <!--        <h2> {{text | toUppercase | to-lowercase }} </h2>-->
    <!--        <hr>-->
    <!--        <button @click="fruits.push('MANGO')">Add New Fruits</button>-->
    <!--        <input type="text" v-model="filterText">-->
    <!--        <ol>-->
    <!--          <li v-for="fruit in filteredFruits">{{ fruit }}</li>-->
    <!--        </ol>-->
    <!--        <hr>-->
    <!--        <app-list></app-list>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <hr>-->
    <!--    <div class="row">-->
    <!--      <app-animation></app-animation>-->
    <!--    </div>-->
    <!--    <hr>-->

    <!--    <div class="row">-->
    <!--      <div class="col col-md-12 col-sm-12">-->
    <!--        <transition name="flip" mode="out-in">-->
    <!--          <component :is="mode" @answered="answered($event)" @confirmed="mode= 'app-question'"></component>-->
    <!--        </transition>-->
    <!--        <hr>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div class="row">-->
    <!--      <div class="col-md-12">-->
    <!--        <h1>HTTP Firebase</h1>-->
    <!--        <div class="form-group">-->
    <!--          <label for="username">User Name</label>-->
    <!--          <input type="text" class="form-control" id="username" placeholder="UserName" v-model="user.username" required>-->
    <!--        </div>-->
    <!--        <div class="form-group">-->
    <!--          <label for="email">Email</label>-->
    <!--          <input type="text" class="form-control" id="email" placeholder="Email" v-model="user.email" required>-->
    <!--        </div>-->
    <!--        <button @click="submit" class="col col-md-12 btn btn-primary">Submit</button>-->
    <!--        <hr>-->
    <!--        <input type="text" class="form-control" v-model="node">-->
    <!--        <hr>-->
    <!--        <button @click="fetchData" class="col col-md-12 text-center btn btn-success">Fetch Data</button>-->
    <!--        <br>-->
    <!--        <br>-->
    <!--        <ul class="list-group">-->
    <!--          <li class="list-group-item text-center font-weight-bolder" v-for="u in users">{{u.username}} - {{u.email}}-->
    <!--          </li>-->
    <!--        </ul>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="row">
      <div class="col-md-6 border border-success">
        <h1 class="text-info">Routing</h1>
        <hr>
        <router-view name="header-top"></router-view>
        <transition name="flip" mode="out-in">
          <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
      </div>
      <div class="col-md-6 text-center border border-primary">
        <h2>VUEX</h2>
        <hr>
        <app-counter @updated="counter += $event"></app-counter>
        <hr>
        <app-result :counter="counter"></app-result>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from './components/quote/QuoteGrid.vue';
  import NewQuote from './components/quote/NewQuote.vue';
  // import Header from './components/quote/Header.vue';
  import List from "./components/list/List";
  import {fruitMixin} from "./components/list/fruitMixin";
  import Animation from "./AnimationsTransitions/Animation";

  import Question from "./Quiz/Question";
  import Answer from "./Quiz/Answer";
  import Header from "./components/Header";

  import Counter from "./components/vuex/Counter";
  import Result from "./components/vuex/Result";

  export default {
    mixins: [fruitMixin],

    data: function () {
      return {
        quotes: [
          'Just a Quote to see something'
        ],
        maxQuotes: 12,
        text: 'Hello Filter is UpperCase & LowerCase',

        // fruits: ['Apple', 'Banana', 'Orange', 'Lemon', 'Mango'],
        // filterText: ''
        mode: 'app-question',
        user: {
          username: '',
          email: ''
        },
        users: [],
        resource: {},
        node: 'data',
        counter: 0,
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    // computed: {
    //   filteredFruits() {
    //     return this.fruits.filter((element) => {
    //       return element.match(this.filterText);
    //     });
    //   }
    // },
    methods: {
      submit() {
        // this.$http.post('https://vuejs-http-start-2020.firebaseio.com/data.json', this.user)
        // this.$http.post('data.json', this.user)
        //   .then(response => {
        //     console.log(response)
        //   }, error => {
        //     console.log(error);
        //   });
        // this.resource.save({}, this.user);
        this.resource.saveAlt(this.user);
      },
      fetchData() {
        // this.$http.get('https://vuejs-http-start-2020.firebaseio.com/data.json')
        // this.$http.get('data.json')
        // this.$http.get('alt.json')
        //   .then(response => {
        //     return response.json();
        //   })
        //   .then(data => {
        //     const resultArray = [];
        //
        //     for (let key in data) {
        //       resultArray.push(data[key]);
        //     }
        //     this.users = resultArray;
        //   })
        this.resource.getData({node: this.node})
          .then(response => {
            return response.json();
          })
          .then(data => {
            const resultArray = [];

            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.users = resultArray;
          });
      },
      newQuote(quote) {
        if (this.quotes.length >= this.maxQuotes) {
          return alert('Please delete Quotes first!');
        }
        this.quotes.push(quote);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      },
      answered(isCorrect) {
        if (isCorrect) {
          this.mode = 'app-answer';
        } else {
          this.mode = 'app-question';
          alert('Wrong , Try Again !!')
        }
      }
    },
    created() {
      const customActions = {
        saveAlt: {method: 'POST', url: 'alt.json'},
        getData: {method: 'GET'}
      };
      // this.resource = this.$resource('data.json', {}, customActions);
      this.resource = this.$resource('{node}.json', {}, customActions);
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appHeader: Header,
      appList: List,
      appAnimation: Animation,
      appQuestion: Question,
      appAnswer: Answer,
      appCounter: Counter,
      appResult: Result,
    }
  }
</script>

<style>
  .flip-enter {
    /*transform: rotateY(0deg);*/
  }

  .flip-enter-active {
    animation: flip-in 0.5s ease-out forwards;
  }

  .flip-leave {
    /*transform: rotateY(0deg);*/
  }

  .flip-leave-active {
    animation: flip-out 0.5s ease-out forwards;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  /*.slide-enter {*/
  /*  !*transform: translateY(20px);*!*/
  /*}*/

  /*.slide-enter-active {*/
  /*  animation: slide-in 1s ease-out forwards;*/
  /*}*/

  /*.slide-leave {*/
  /*  opacity: 1;*/
  /*  transform: translateX(0);*/
  /*}*/

  /*.slide-leave-active {*/
  /*  transition: opacity 1s ease;*/
  /*  opacity: 0;*/
  /*  animation: slide-out 1s ease-out forwards;*/
  /*}*/

  /*@keyframes slide_in {*/
  /*  100% {*/
  /*    transform: translateY(-30px);*/
  /*  }*/
  /*  0% {*/
  /*    transform: translateY(0);*/
  /*  }*/
  /*}*/

  /*@keyframes slide-out {*/
  /*  0% {*/
  /*    transform: translateY(0);*/
  /*  }*/
  /*  100% {*/
  /*    transform: translateY(-30px);*/
  /*  }*/
  /*}*/
</style>
