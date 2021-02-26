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
      <button type="reset" class="btn btn-danger"
      @click.prevent="cancel">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditForm",
  props: ['editData'],
  data() {
    return {
      title: this.editData.title,
      category: this.editData.category,
      id: this.editData.id,
    }
  },
  methods: {
    edit() {
      const data = {
        title: this.title,
        category: this.category,
        id: this.id
      }
      this.$emit('edit', data)
      this.$emit('closeEdit')
      this.title = ''
      this.category = ''
      this.id = ''
    },
    cancel() {
      this.$emit('closeEdit', false)
      this.title = ''
      this.category = ''
      this.id = ''
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
