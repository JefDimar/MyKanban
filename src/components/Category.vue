<template>
  <div class="card col m-3">
    <h2
      class="card-header"
      :class="{
        'bg-info': category === 'Backlog',
        'bg-warning': category === 'Todo',
        'bg-primary': category === 'Doing',
        'bg-success': category === 'Done',
      }"
    >
      {{ category }}
    </h2>

    <Tasks
      v-for="task in processTask"
      :key="task.id"
      :task="task"
      @changeCategory="changeCategory"
      @deleteTask="deleteTask"
      @editForm="editForm">
    </Tasks>

    <FormAdd
      :category="category"
      @createTask="createTask">
    </FormAdd>
  </div>
  <!-- End of category -->
</template>

<script>
import Tasks from "../components/Task";
import FormAdd from "../components/FormAdd";

export default {
  name: "Category",
  props: ['category', 'tasks'],
  components: {
    Tasks,
    FormAdd,
  },
  data() {
    return {
      
    };
  },
  methods: {
    changeCategory(id, category) {
      this.$emit('changeCategory', id, category)
    },
    deleteTask(id) {
      this.$emit('deleteTask', id)
    },
    createTask(input, category) {
      this.$emit('createTask', input, category)
    },
    editForm(id) {
      this.$emit('editForm', id)
    }
  },
  computed: {
    processTask() {
      return this.tasks.filter(task => task.category.toLowerCase() == this.category.toLowerCase())
    },
  },
};
</script>

<style scoped>
.card {
  height: 80vh;
  box-shadow: 2px 2px grey;
  overflow: auto;
}
</style>
