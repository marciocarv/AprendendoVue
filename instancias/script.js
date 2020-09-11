const vm = new Vue({
    el: '#app',
    data: {
      text: 'Lorem ipsum dolor sit amet consectetur',
      linkTag: `
      <a v-bind:href="link">teste</a>
    `       
    }
  })