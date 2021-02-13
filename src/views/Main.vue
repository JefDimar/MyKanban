<template>
  <div class="container-fluid">
    <div class="row">
      <Category
        v-for="(category, idx) in categories"
        :key="idx"
        :category="category"
        :tasks="dataTasks"
        @changeCategory="changeCategory"
        @deleteTask="deleteTask"
        @createTask="createTask"
        @editForm="editForm"
        v-show="showEditForm == false"
      >
      </Category>

      <EditForm 
        v-show="showEditForm == true"
        :editData="editData">

      </EditForm>
    </div>
  </div>
</template>

<script>
import Category from "../components/Category";
import EditForm from "../components/EditForm";

export default {
  name: "Main",
  components: {
    Category,
    EditForm,
  },
  props: ["dataTasks", "editData"],
  data() {
    return {
      categories: ["Backlog", "Todo", "Doing", "Done"],
      showEditForm: false
    };
  },
  methods: {
    changeCategory(id, category) {
      this.$emit("changeCategory", id, category);
    },
    deleteTask(id) {
      this.$emit("deleteTask", id);
    },
    createTask(input, category) {
      this.$emit("createTask", input, category);
    },
    editForm(id) {
      this.$emit("editForm", id);
      this.showEditForm = true;
    }
  },
  computed: {},
};
</script>

<style></style>
