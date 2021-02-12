<template>
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
            <input type="text" class="form-control"/>
            <label class="form-label">Category</label>
            <select
              class="form-select"
              aria-label="Default select example"
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
          <button type="button" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalForm",
};
</script>

<style></style>
