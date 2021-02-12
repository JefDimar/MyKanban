<template>
  <!-- Tasks -->
  <div class="card-block" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">
        {{ task.title }}
      </h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ task.username }}
      </h6>
      <a href="#" class="card-link">
        <span
          class="material-icons text-info"
          data-toggle="modal" data-target="#exampleModal"
          @click.prevent="editTask(task.id)"
        >
          edit
        </span>
      </a>
      <a href="#" class="card-link">
        <span
          class="material-icons text-danger"
          @click.prevent="deleteTask(task.id)"
        >
          delete
        </span>
      </a>
      <a href="#" class="card-link">
        <span
          class="material-icons text-success"
          v-if="
            task.category == 'done' ||
              task.category == 'todo' ||
              task.category == 'doing'
          "
          @click.prevent="changeCategory(task.id, geserKiri)"
        >
          first_page
        </span>
      </a>
      <a href="#" class="card-link">
        <span
          class="material-icons text-success"
          v-if="
            task.category == 'backlog' ||
              task.category == 'todo' ||
              task.category == 'doing'
          "
          @click.prevent="changeCategory(task.id, geserKanan)"
        >
          last_page
        </span>
      </a>
    </div>
  </div>
  <!-- End of tasks-->
</template>

<script>
export default {
  name: "Task",
  props: ["task"],
  data() {
    return {
      category: this.task.category,
    };
  },
  methods: {
    editTask(id) {},
    deleteTask(id) {
      this.$emit('deleteTask', id)
    },
    changeCategory(id, category) {
      this.$emit("changeCategory", id, category);
    },
  },
  computed: {
    geserKanan() {
      if (this.category == "backlog") {
        return 'todo'
      } else if (this.category == "todo") {
        return 'doing'
      } else if (this.category == "doing") {
        return 'done'
      }
    },
    geserKiri() {
      if (this.category == "done") {
        return 'doing';
      } else if (this.category == "doing") {
        return 'todo'
      } else if (this.category == "todo") {
        return 'backlog'
      }
    },
  },
};
</script>

<style></style>
