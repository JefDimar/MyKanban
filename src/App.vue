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
      :dataTasks="tasks"
      @changeCategory="changeCategory"
      @deleteTask="deleteTask">
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
            Swal.fire(response.data, '', 'error')
          })
        }
      })
    },
  },
  created() {
    this.checkAuth()
  },
  computed: {
  }
};
</script>

<style></style>
