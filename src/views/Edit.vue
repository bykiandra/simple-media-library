<template>
  <div class="edit text-left">
    <h3>Edit</h3>
    <p id="success" class="hide"></p>
    <p id="error" class="hide"></p>
    <form id="editForm" @submit.prevent="editEntry(entry)">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" :value="entry.title">
      <label for="type">Type</label>
      <select name="type" id="type" :value="entry.type">
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
      <select name="status" id="status" :value="entry.status">
        <option disabled selected value="">Please select</option>
        <option value="Ready to start">Ready to start</option>
        <option value="Watching">Watching</option>
        <option value="Reading">Reading</option>
        <option value="Listening">Listening</option>
        <option value="Finished">Finished</option>
      </select>
      <label for="rating">Rating</label>
      <select name="rating" id="rating" :value="entry.rating">
        <option selected value=""></option>
        <option value="⭐️">⭐️</option>
        <option value="⭐️⭐️">⭐️⭐️</option>
        <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
        <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
        <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
      </select>
      <label for="author">Author</label>
      <input type="text" name="author" id="author" :value="entry.author">
      <label for="link">Link</label>
      <input type="text" name="link" id="link" :value="entry.links">
      <button type="submit">Edit</button>&nbsp;
      <a href="router.go(-1)" class="button muted-button">Back</a>
    </form>
  </div>
</template>

<script>
import store from "store2";

export default {
  name: "Edit",
  data() {
    return {
      entry: store(this.$route.params.id)
    }
  },
  methods: {
    editEntry(oldId) {
      // Remove any prior messages
      let success = document.getElementById("success");
      let error = document.getElementById("error");

      if (!success.classList.contains("hide")) success.classList.add("hide");
      if (!error.classList.contains("hide")) error.classList.add("hide");

      if (this.formValidate()) {
        let newTitle = document.getElementById("title").value;
        let newType = document.getElementById("type").value;
        let newStatus = document.getElementById("status").value;
        let newRating = document.getElementById("rating").value;
        let newAuthor = document.getElementById("author").value != "" ? document.getElementById("author").value : "";
        let newLink = document.getElementById("link").value != "" ? document.getElementById("link").value : "";
        
        store.set(entry, {
          title: newTitle,
          type: newType,
          status: newStatus,
          rating: newRating,
          author: newAuthor,
          links: newLink
        });

        success.innerHTML = "<strong>" + newTitle + "</strong> has been successfully updated.";
        success.classList.remove("hide");
      } else {
        error.innerHTML = "The highlighted fields are required.";
        error.classList.remove("hide");
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

<style>
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