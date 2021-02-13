<template>
  <div class="container align-items-center">
    <h3>Edit Tasks:</h3>
    <form @submit.prevent="edit">
      <div class="mb-3">
        <label class="form-label">Title:</label>
        <input type="text" class="form-control" v-model="title">
      </div>
      <div class="mb-3">
        <label class="form-label">Category:</label>
        <select class="form-select" v-model="category">
          <option selected>Please Choose One Category</option>
          <option value="backlog">Backlog</option>
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button 
        type="submit" 
        class="btn btn-primary">
        Submit
      </button>
      <button type="reset" class="btn btn-danger">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditForm",
  props: ['editData'],
  data() {
    return {
      title: this.getTitle,
      category: this.getCategory,
      id: this.getId,
    }
  },
  methods: {
    edit() {
      
    }
  },
  computed: {
    getTitle() {
      return this.editData.title
    },
    getCategory() {
      return this.editData.category
    },
    getId() {
      return this.editData.id
    }
  }
};
</script>

<style scoped>
.container {
  background-color: white;
  width: 400px;
}
</style>
