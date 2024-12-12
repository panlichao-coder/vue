Vue.createApp({
  template: "#my-app",
  data() {
    return {
      books: [
        {
          id: 1,
          name: "《算法导论》",
          date: "2006-9",
          price: 85.0,
          count: 1,
        },
        {
          id: 2,
          name: "《C++ Primer Plus》",
          date: "2013-7",
          price: 68.0,
          count: 2,
        },
        {
          id: 3,
          name: "《JavaScript高级程序设计》",
          date: "2015-3",
          price: 89.0,
          count: 3,
        },
        {
          id: 4,
          name: "《Effective Java》",
          date: "2018-1",
          price: 59.0,
          count: 4,
        },
        {
          id: 5,
          name: "《Clean Code》",
          date: "2008-6",
          price: 49.0,
          count: 5,
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.books.reduce((sum, book) => sum + book.price * book.count, 0);
    },
    formatPrice() {
      return (price) => {
        return "$" + price;
      };
    },
  },
  methods: {
    increment: function (index) {
      this.books[index].count++;
    },
    decrement: function (index) {
      if (this.books[index].count > 0) this.books[index].count--;
    },
    removeBook: function (index) {
      this.books.splice(index, 1);
    },
  },
}).mount("#app");
