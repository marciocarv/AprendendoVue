const vm = new Vue({
    el: '#app',
    data: {
      users: {
        daniel: 'admin',
        tiago: 'editor',
        joao: 'guest',
      },
      todos: [
        {
          id: 123,
          title: 'Wsh my car',
          complete: false,
        },
        {
          id: 321,
          title: 'Buy some milk',
          complete: true,
        }
      ]
    }
  })