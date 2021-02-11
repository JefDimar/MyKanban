<template>
  <div>
    <Navbar 
      :page="page"
      @gantiPage="changePage">
    </Navbar>

    <Login 
      v-if="page === 'login'" 
      @gantiPage="changePage" 
      @login="login">
    </Login>

    <Register
      v-if="page === 'register'"
      @gantiPage="changePage"
      @register="register">
    </Register>

    <Main 
      v-if="page === 'main'"
      :backlogTasks="backlogTasks"
      :todoTasks="todoTasks"
      :doingTasks="doingtasks"
      :doneTasks="doneTasks">
    </Main>
  </div>
</template>

<script>
import Navbar from "./views/Navbar.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Main from "./views/Main.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "App",
  components: {
    Navbar,
    Login,
    Register,
    Main,
  },
  data() {
    return {
      page: "login",
      server: "http://localhost:3030/",
      tasks: []
    };
  },
  methods: {
    changePage(halaman) {
      this.page = halaman;
    },
    register({ email, password }) {
      // console.log(email);
      // console.log(password);
      axios({
        method: "POST",
        url: this.server + "register",
        data: {
          email,
          password,
        },
      })
        .then(({ data }) => {
          // console.log(data);
          Swal.fire({
            icon: "success",
            title: "Yeay you are registered, please login first",
            showConfirmButton: false,
            timer: 1500,
          });
          this.page = "login";
        })
        .catch(({ response }) => {
          // console.log(response.data.message);
          if (Array.isArray(response.data.message)) {
            const error = response.data.message;
            Swal.fire(error.join("\n"), "", "error");
          } else {
            Swal.fire(response.data.message, "", "error");
          }
          this.page = "register";
        });
    },
    login({ email, password }) {
      axios({
        method: "POST",
        url: this.server + "login",
        data: {
          email,
          password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          // console.log(localStorage.access_token);
          this.page = "main";
          this.fetchTasks()
        })
        .catch(({ response }) => {
          // console.log(response.data.message);
          Swal.fire(response.data.message, "", "error");
        });
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
          this.tasks = data
        })
        .catch(({response}) => {
          console.log(response);
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
};
</script>

<style></style>
