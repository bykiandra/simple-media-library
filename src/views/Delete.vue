<template>
  <div class="delete text-left">
    <h3>Delete</h3>
    <p id="deleteMessage">
      Are you sure you want to delete <strong>{{ entry.title }}</strong>?<br /><br />
      <button @click="deleteEntry(entry)" >Yes</button>&nbsp;
      <a href="router.go(-1)" class="button muted-button">No</a>&nbsp;
      <router-link :to="{ name: 'Edit', params: { id: entry.id } }" class="button muted-button">Edit instead</router-link>
    </p>
    <p id="success" class="hide"></p>
  </div>
</template>

<script>
import store from "store2";

export default {
  name: "Delete",
  data() {
    return {
      entry: store(this.$route.params.id)
    }
  },
  methods: {
    deleteEntry(entry) {
      let title = entry.title;
      store.remove(entry.id);

      document.getElementById("deleteMessage").classList.add("hide");
      document.getElementById("success").innerHTML = "<strong>" + title + "</strong> has been successfully deleted.";
      document.getElementById("success").classList.remove("hide");
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
</style>
