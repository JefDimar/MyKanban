<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> Kanban Board </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a
            class="nav-link active"
            aria-current="page"
            href="#"
            v-if="page === 'main'"
          >
            Home
          </a>
          <a
            class="nav-link active"
            aria-current="page"
            href="#"
            v-if="page === 'main'"
            @click.prevent="logout"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['page'],
  data() {
    return {
      halaman: '',
    }
  },
  methods: {
    logout() {
      // const auth2 = gapi.auth2.getAuthInstance();
      // auth2.signOut().then(function () {
      //   console.log('User signed out.');
      // });
      localStorage.clear();
      this.$emit('gantiPage', 'login')
    },
    home() {
      this.$emit('gantiPage', 'main')
    }
  }
};
</script>

<style></style>
