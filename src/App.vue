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
        {{text | toUppercase }}
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from './components/quote/QuoteGrid.vue';
  import NewQuote from './components/quote/NewQuote.vue';
  import Header from './components/quote/Header.vue';

  export default {
    data: function () {
      return {
        quotes: [
          'Just a Quote to see something'
        ],
        maxQuotes: 12,
        text: 'Hello Filter is uppercase'
      }
    },
    filters:{
      toUppercase(value){
        return value.toUpperCase();
      }
    },
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
      appHeader: Header
    }
  }
</script>

<style>
</style>
