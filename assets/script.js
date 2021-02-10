const app = new Vue({
  el: "#app",
  data: {
    page: "login",
    email: '',
    password: '',
    backlog: '',
    doing: '',
    todo: '',
    done: '',
    category: '',
    tasks: []
  },
  methods: {
    changePage(page) {
      this.page = page
    },
    login() {
      console.log(this.email);
      console.log(this.password);
    },
    register() {
      console.log(this.email);
      console.log(this.password);
    },
    createTasks(category) {
      this.category = category;
      console.log(this.backlog);
      console.log(this.doing);
      console.log(this.todo);
      console.log(this.done);
      console.log(category);
    }
  },
});
