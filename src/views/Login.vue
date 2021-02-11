<template>
  <main
    class="form-signin container mb-3"
  >
    <form 
      class="col-4 offset-4 mb-2"
      @submit.prevent="login">
      <h1 class="mb-3 fw-normal text-xl-center text">
        <strong>Please sign in</strong>
      </h1>
      <label for="inputEmail" class="visually-hidden">
        Email address
      </label>
      <input
        type="text"
        class="form-control"
        placeholder="Email address"
        v-model="input.email"
      />
      <label for="inputPassword" class="visually-hidden"> Password </label>
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="input.password"
      />
      <button class="w-100 btn btn-lg btn-info mt-2" type="submit">
        Sign in
      </button>
      <button
        class="w-100 btn btn-lg btn-success"
        @click.prevent="gantiPage"
      >
        Don't Have An Account?
      </button>
    </form>
    <h3 class="mb-3 col-4 offset-4">Or Sign In With:</h3>
    <!-- Google button -->
    <div class="g-signin2 mb-3 col-4 offset-4" data-onsuccess="onSignIn"></div>
  </main>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    gantiPage() {
      this.$emit('gantiPage', 'register')
    },
    login() {
      this.$emit('login', this.input)
    }
  }
};
</script>

<style></style>
