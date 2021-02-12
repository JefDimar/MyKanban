<template>
  <main class="form-signin container mb-3">
    <form class="col-4 offset-4 mb-2" @submit.prevent="login">
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
      <button class="w-100 btn btn-lg btn-success" @click.prevent="gantiPage">
        Don't Have An Account?
      </button>
    </form>
    <h3 class="mb-3 col-4 offset-4">Or Sign In With:</h3>
    <!-- Google button -->
    <g-signin-button
      class="btn btn-info mb-3 col-4 offset-4"
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError"
    >
      <img src="https://img.icons8.com/color/16/000000/google-logo.png">
      Sign in with Google
    </g-signin-button>
  </main>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
      googleSignInParams: {
        client_id:
          "430929796049-fmn0p473ofhisfpadup678qcg8533ict.apps.googleusercontent.com",
      },
    };
  },
  methods: {
    gantiPage() {
      this.$emit("gantiPage", "register");
    },
    login() {
      this.$emit("login", this.input);
      this.input.email = "";
      this.input.password = "";
    },
    onSignInSuccess(googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const id_token = googleUser.getAuthResponse().id_token; // etc etc
      // console.log(id_token);
      this.$emit("googleLogin", id_token);
    },
    onSignInError(error) {
      // `error` contains any error occurred.
      console.log("OH NOES", error);
    },
  },
};
</script>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
