<template>
  <div class="medium-container">
    <h1>Simple Media Library</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
.medium-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
