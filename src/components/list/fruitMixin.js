export const fruitMixin = {
  data: function () {
    return {
      fruits: ['Apple', 'Banana', 'Orange', 'Lemon', 'Mango'],
      filterText: ''
    }
  },

  computed: {
    filteredFruits() {

      return this.fruits.filter((element) => {

        return element.match(this.filterText);

      });
    }
  },
};
