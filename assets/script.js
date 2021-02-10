const app = new Vue({
  el: "#app",
  data: {
    page: "",
    login: {
      email: "",
      password: "",
    },
    register: {
      email: "",
      password: "",
    },
    backlog: "",
    doing: "",
    todo: "",
    done: "",
    category: "",
    tasks: [],
    server: "http://localhost:3030/",
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
    loginServ() {
      axios({
        method: "POST",
        url: this.server + "login",
        data: {
          email: this.login.email,
          password: this.login.password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          this.page = "main";
        })
        .catch(({ response }) => {
          const errors = response.data.message;
          Swal.fire(errors, "", "error");
          this.page = "login";
        })
        .then((_) => {
          this.login.email = "";
          this.login.password = "";
        });
    },
    registerServ() {
      axios({
        method: "POST",
        url: this.server + "register",
        data: {
          email: this.register.email,
          password: this.register.password,
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.page = "login";
        })
        .catch(({ response }) => {
          const errors = response.data.message;
          if (Array.isArray(errors)) {
            Swal.fire(errors.join("\n"), "", "error");
          } else {
            Swal.fire(errors, "", "error");
          }
          this.page = "register";
        })
        .then((_) => {
          this.register.email = "";
          this.register.password = "";
        });
    },
    btnLogout() {
      localStorage.clear();
      this.page = "login";
    },
    fetchTasks() {
      axios({
        method: "GET",
        url: this.server + "tasks",
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.tasks.push(data);
        })
        .catch(({ response }) => {
          console.log(response.data);
        });
    },
    createTasks() {
      
    },
  },
  created() {
    const access_token = localStorage.access_token;
    if (access_token) {
      this.page = "main";
      this.fetchTasks;
    } else {
      this.page = "login";
    }
  },
});
