<template>
  <div class="add">
    <h3>Add New Media</h3>
    <form>
      <label for="title">Title</label>
      <input type="text" name="title" id="title">
      <label for="type">Type</label>
      <select name="type" id="type">
        <option disabled selected>Please select</option>
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
        <option disabled selected>Please select</option>
        <option value="Ready to start">Ready to start</option>
        <option value="Watching">Watching</option>
        <option value="Reading">Reading</option>
        <option value="Listening">Listening</option>
        <option value="Finished">Finished</option>
      </select>
      <label for="rating">Rating</label>
      <input type="number" name="rating" id="rating">
      <label for="author">Author</label>
      <input type="text" name="author" id="author">
      <label for="link">Link</label>
      <input type="text" name="link" id="link">
      <input type="submit" value="Add">
    </form>
  </div>

</template>
