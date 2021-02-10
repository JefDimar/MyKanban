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
    addTasks: {
      backlog: "",
      doing: "",
      todo: "",
      done: ""
    },
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
          this.fetchTasks;
          this.login.email = ''
          this.login.password = ''
        })
        .catch(({ response }) => {
          const errors = response.data.message;
          Swal.fire(errors, "", "error");
          this.page = "login";
        })
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
          Swal.fire({
            icon: 'success',
            title: 'Yeay you are registered, please login first',
            showConfirmButton: false,
            timer: 1500
          })
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
          this.tasks = data;
        })
        .catch(({ response }) => {
          console.log(response.data.message);
        });
    },
    createTasks(category) {
      const input = {
        tasks: this.addTasks[category],
        category
      }
      axios({
        method: 'POST',
        url: this.server + 'tasks',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          title: input.tasks,
          category: input.category 
        }
      })
        .then(_ => {
          Swal.fire({
            icon: 'success',
            title: 'Tasks added',
            showConfirmButton: false,
            timer: 1500
          })
          this.checkAuth()
          this.addTasks[category] = ''
        })
        .catch(({ response }) => {
          Swal.fire(response.data.message[0], '', 'error')
        })
    },
    checkAuth() {
      const access_token = localStorage.access_token;
      if (access_token) {
        this.page = "main";
        this.fetchTasks()
      } else {
        this.page = "login";
      }
    },
    changeCategory(id, category) {
      console.log(id, category);
      axios({
        method: 'PATCH',
        url: this.server + `tasks/${id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          category
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Success change category',
            showConfirmButton: false,
            timer: 1500
          })
          this.checkAuth()
        })
        .catch(({ response }) => {
          Swal.fire(response.data.message, '', 'error')
        })
    },
    deleteTask(id) {
      Swal.fire({
        icon: 'warning',
        title: 'Do you want to delete todos?',
        showDenyButton: true,
        confirmButtonText: `Back`,
        denyButtonText: `Delete`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Todos not deleted', '', 'info')
        } else if (result.isDenied) {
          axios({
            url: this.server + `tasks/${id}`,
            method: 'DELETE',
            headers: {
              access_token: localStorage.access_token
            }
          })
          .then(({ data }) => {
            Swal.fire(data.message, '', 'success')
            this.checkAuth()
          })
          .catch(({ response }) => {
            Swal.fire(response, '', 'error')
          })
        }
      })
    }
  },
  created() {
    this.checkAuth()
  },
  computed: {
    backlogTasks() {
      return this.tasks.filter(task => task.category === 'backlog')
    },
    todoTasks() {
      return this.tasks.filter(task => task.category === 'todo')
    },
    doingTasks() {
      return this.tasks.filter(task => task.category === 'doing')
    },
    doneTasks() {
      return this.tasks.filter(task => task.category === 'done')
    }
  }
});
