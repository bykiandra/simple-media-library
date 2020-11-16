<template>
  <div class="medium-container">
    <h1>Simple Media Library</h1>
    <div id="nav">
      <router-link to="/" class="button"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="5 12 3 12 12 3 21 12 19 12" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
      </svg></router-link>&nbsp;
      <router-link to="/add" class="button"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg></router-link>
    </div>
    <router-view/>
    <div id="footer">
      Built by <a href="https://github.com/Saoskia" target="_blank">Saoskia</a> | <a href="https://github.com/Saoskia/simple-media-library" target="_blank">GitHub</a>
    </div>
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
  padding: 15px 30px 30px;
}
svg {
  margin-top: -10px;
}
#footer {
  font-size: 12px;
  margin-top: 40px;
}
</style>
