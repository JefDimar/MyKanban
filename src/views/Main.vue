<template>
  <!-- Main page / Kanban board -->
  <div class="container-fluid">
    <div class="row">
      <!-- Backlog -->
      <div class="card col m-3">
        <h2 class="card-header bg-info">Backlog</h2>

        <!-- Tasks -->
        <div class="card-block" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">
              Title
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Username creator
            </h6>
            <a href="#" class="card-link">
              <span
                class="material-icons text-info"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                edit
              </span>
            </a>
            <a href="#" class="card-link">
              <span
                class="material-icons text-danger"
              >
                delete
              </span>
            </a>
            <a href="#" class="card-link">
              <span
                class="material-icons text-success"
              >
                last_page
              </span>
            </a>
          </div>
        </div>
        <!-- End of tasks-->

        <!-- Form add-->
        <div class="input-group mb-3">
          <span class="input-group-text"> Add </span>
          <input
            type="text"
            class="form-control"
            placeholder="Tasks"
            v-model="addTasks.backlog"
          />
          <button
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
        <!-- End of form add -->
      </div>
      <!-- End of category -->

      <!-- Todo -->
      <div class="card col m-3">
        <h2 class="card-header bg-warning">Todo</h2>

        <!-- Tasks -->
        <div class="card-block" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">
              Title
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Username creator
            </h6>
            <a href="#" class="card-link">
              <span
                class="material-icons text-info"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                edit
              </span>
            </a>
            <a href="#" class="card-link">
              <span
                class="material-icons text-danger"
              >
                delete
              </span>
            </a>
            <a href="#" class="card-link"
              ><span
                class="material-icons text-success"
              >
                first_page
              </span>
            </a>
            <a href="#" class="card-link"
              ><span
                class="material-icons text-success"
              >
                last_page
              </span>
            </a>
          </div>
        </div>
        <!-- End of tasks-->

        <!-- Form add-->
        <div class="input-group mb-3">
          <span class="input-group-text">Add</span>
          <input
            type="text"
            class="form-control"
            placeholder="Tasks"
            v-model="addTasks.todo"
          />
          <button
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
        <!-- End of form add -->
      </div>
      <!-- End of category -->

      <!-- Doing -->
      <div class="card col m-3">
        <h2 class="card-header bg-primary">Doing</h2>

        <!-- Tasks -->
        <div class="card-block" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">
              title
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Username Creator
            </h6>
            <a href="#" class="card-link">
              <span
                class="material-icons text-info"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                edit
              </span>
            </a>
            <a href="#" class="card-link">
              <span
                class="material-icons text-danger"
              >
                delete
              </span>
            </a>
            <a href="#" class="card-link">
              <span
                class="material-icons text-success"
              >
                first_page
              </span>
            </a>
            <a href="#" class="card-link">
              <span
                class="material-icons text-success"
              >
                last_page
              </span>
            </a>
          </div>
        </div>
        <!-- End of tasks-->

        <!-- Form add-->
        <div class="input-group mb-3">
          <span class="input-group-text">Add</span>
          <input
            type="text"
            class="form-control"
            placeholder="Tasks"
            v-model="addTasks.doing"
          />
          <button
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
        <!-- End of form add -->
      </div>
      <!-- End of category -->

      <!-- Done -->
      <div class="card col m-3">
        <h2 class="card-header bg-success">Done</h2>

        <!-- Tasks -->
        <div class="card-block" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">
              Title
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Username
            </h6>
            <a href="#" class="card-link">
              <span
                class="material-icons text-info"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                edit
              </span>
            </a>
            <a href="#" class="card-link">
              <span
                class="material-icons text-danger"
              >
                delete
              </span>
            </a>
            <a href="#" class="card-link">
              <span
                class="material-icons text-success"
              >
                first_page
              </span>
            </a>
          </div>
        </div>
        <!-- End of tasks-->

        <!-- Form add-->
        <div class="input-group mb-3">
          <span class="input-group-text">Add</span>
          <input
            type="text"
            class="form-control"
            placeholder="Tasks"
            v-model="addTasks.done"
          />
          <button
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
        <!-- End of form add -->
      </div>
      <!-- End of category -->

      <!-- Modal edit page -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Tasks:
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <label class="form-label">Title</label>
                <input 
                  type="text" 
                  class="form-control" 
                  v-model="title" 
                />
                <label class="form-label">Category</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="category"
                >
                  <option disabled value="">Select a category</option>
                  <option>Backlog</option>
                  <option>Todo</option>
                  <option>Doing</option>
                  <option>Done</option>
                </select>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- End of main page -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: ['backlogTasks', 'todoTasks', 'doingTasks', 'doneTasks'],
  data() {
    return {
      addTasks: {
        backlog: '',
        todo: '',
        doing: '',
        done: ''
      },
      title: '',
      category: '',
      id: 0
    }
  }
};
</script>

<style></style>
