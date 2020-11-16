<template>
  <div class="add text-left">
    <h3>Add New Media</h3>
    <p id="success" class="hide"></p>
    <p id="error" class="hide"></p>
    <form @submit.prevent="addNew">
      <label for="title">Title</label>
      <input type="text" name="title" id="title">
      <label for="type">Type</label>
      <select name="type" id="type">
        <option disabled selected value="">Please select</option>
        <option value="Academic Journal">Academic Journal</option>
        <option value="Article">Article</option>
        <option value="Essay Resource">Essay Resource</option>
        <option value="Fiction">Fiction</option>
        <option value="Film">Film</option>
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Podcast">Podcast</option>
        <option value="TV Series">TV Series</option>
      </select>
      <label for="status">Status</label>
      <select name="status" id="status">
        <option disabled selected value="">Please select</option>
        <option value="Ready to start">Ready to start</option>
        <option value="Watching">Watching</option>
        <option value="Reading">Reading</option>
        <option value="Listening">Listening</option>
        <option value="Finished">Finished</option>
      </select>
      <label for="rating">Rating</label>
      <input type="number" name="rating" id="rating" min="0" max="5" value="0">
      <label for="author">Author</label>
      <input type="text" name="author" id="author">
      <label for="link">Link</label>
      <input type="text" name="link" id="link">
      <button type="submit">Add</button>&nbsp;
      <button type="reset" class="muted-button">Clear</button>
    </form>
  </div>

</template>

<script>
import store from "store2";

export default {
  name: "Add",
  methods: {
    addNew () {
      if (this.formValidate()) {
        let newTitle = document.getElementById("title").value;
        let newType = document.getElementById("type").value;
        let newStatus = document.getElementById("status").value;
        let newRating = document.getElementById("rating").value;
        let newAuthor = document.getElementById("author").value != "" ? document.getElementById("author").value : "";
        let newLinks = document.getElementById("link").value != "" ? document.getElementById("link").value : "";
        
        store.set(newTitle, {
          title: newTitle,
          type: newType,
          status: newStatus,
          rating: newRating,
          author: newAuthor,
          links: newLinks     // Links because link gives back some unwanted data
        });

        document.getElementById("success").innerHTML = "<strong>" + newTitle + "</strong> has been successfully added.";
        document.getElementById("success").classList.remove("hide");
      } else {
        document.getElementById("error").innerHTML = "The highlighted fields are required.";
        document.getElementById("error").classList.remove("hide");
      }
    },
    formValidate () {
      var result = true;
      let titleInput = document.getElementById("title");
      let typeInput = document.getElementById("type");
      let statusInput = document.getElementById("status");

      if (titleInput.value == ""){
        titleInput.classList.add("has-error");
        result = false;
      }
      if (typeInput.value == "") {
        typeInput.classList.add("has-error");
        result = false;
      }
      if (statusInput.value == "") {
        statusInput.classList.add("has-error");
        result = false;
      }
      console.log(result);
      return result;
    }
  }
}
</script>

<style scoped>
#success {
  color: #43A047;
  background-color: #A5D6A7;
  border: 1px solid #43A047;
  border-radius: 3px;
  padding: 5px;
}
#error {
  color: #e53935;
  background-color: #ef9a9a;
  border: 1px solid #e53935;
  border-radius: 3px;
  padding: 5px;
}
</style>
