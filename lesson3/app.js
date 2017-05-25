var app = new Vue({
  el: '#app',
  data: {
    city: 'Ottawa'
  },
  methods: {
    year: () => new Date().getFullYear(),
    age: () => (2017 - 1867),
    sayWelcome: function(){
      return this.city
    }
  }
})