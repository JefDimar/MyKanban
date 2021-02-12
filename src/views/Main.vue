<template>
  <!-- Main page / Kanban board -->
  <div class="container-fluid">
    <div class="row">
      <Category
        v-for="(category, idx) in categories" 
        :key="idx"
        :category="category"
        :tasks="dataTasks"
        @changeCategory="changeCategory"
        @deleteTask="deleteTask">
      </Category>
      <!-- End of main page -->
    </div>
    <ModalForm></ModalForm>
  </div>
</template>

<script>
import Category from '../components/Category'
import ModalForm from '../components/ModalForm'

export default {
  name: 'Main',
  components: {
    Category,
    ModalForm
  },
  props: ['dataTasks'],
  data() {
    return {
      categories: ['Backlog', 'Todo', 'Doing', 'Done'],
    }
  },
  methods: {
    changeCategory(id, category) {
      this.$emit('changeCategory', id, category)
    },
    deleteTask(id) {
      this.$emit('deleteTask', id)
    }
  },
  computed: {
  }
};
</script>

<style></style>
