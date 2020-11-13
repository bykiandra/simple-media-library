<template>
  <div class="add">
    <h3>Add New Media</h3>
    <p id="success"></p>
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
      <button type="submit">Add</button>
    </form>
  </div>

</template>

<script>
import store from "store2";

export default {
  name: "Add",
  methods: {
    addNew () {
      // TODO:
      // - Add new media to data
      // - Either redirect to home, or display success message
      if (this.formValidate()) {
        let newTitle = document.getElementById("title").value;
        let newType = document.getElementById("type").value;
        let newStatus = document.getElementById("status").value;
        let newRating = document.getElementById("rating").value;
        let newAuthor = document.getElementById("author").value != "" ? document.getElementById("author").value : "";
        let newLink = document.getElementById("link").value != "" ? document.getElementById("link").value : "";
        
        store.set(newTitle, {
          type: newType,
          status: newStatus,
          rating: newRating,
          author: newAuthor,
          link: newLink
        });

        document.getElementById("success").innerHTML = "Success";
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
