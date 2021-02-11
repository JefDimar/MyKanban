<template>
<div>
  <h1>{{ message }}</h1>
</div>
</template>

<script>
import Navbar from './views/Navbar'
import Login from './views/Login'
import Register from './views/Register'
import Main from './views/Main'

export default {
  data() {
    return {
      message: 'Hello world',
    };
  },
};
</script>

<style>

</style>