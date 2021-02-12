<template>
  <!-- Form add-->
  <div class="input-group mb-3">
    <span class="input-group-text"> Add </span>
    <input 
      type="text" 
      class="form-control" 
      placeholder="Tasks"
      v-model="input" />
    <button 
      type="submit" 
      class="btn btn-primary"
      @click.prevent="createTask">
      Submit
    </button>
  </div>
  <!-- End of form add -->
</template>

<script>
export default {
  name: "FormAdd",
  props: ['category'],
  data() {
    return {
      input: ''
    }
  },
  methods: {
    createTask() {
      this.$emit('createTask', this.input, this.category)
      this.input = ''
    }
  }
};
</script>

<style></style>
