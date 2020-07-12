<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <h2> {{text | toUppercase | to-lowercase }} </h2>
        <hr>
        <input type="text" v-model="filterText">
        <ol>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ol>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from './components/quote/QuoteGrid.vue';
  import NewQuote from './components/quote/NewQuote.vue';
  import Header from './components/quote/Header.vue';
  import List from "./components/list/List";
  import {fruitMixin} from "./components/list/fruitMixin";

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
      newQuote(quote) {
        if (this.quotes.length >= this.maxQuotes) {
          return alert('Please delete Quotes first!');
        }
        this.quotes.push(quote);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appHeader: Header,
      appList: List
    }
  }
</script>

<style>
</style>
