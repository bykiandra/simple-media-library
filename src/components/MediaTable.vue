<template>
  <v-table
    :data="data"
    :hideSortIcons="true"
    class="striped-table">
    <thead slot="head">
      <th class="text-center">Type</th>
      <th>Title</th>
      <th class="text-center">Status</th>
      <th>Rating</th>
      <th>Author</th>
      <th class="text-center">Link</th>
      <th class="text-center">Actions</th>
    </thead>
    <tbody slot="body" slot-scope="{ displayData }">
      <tr v-for="row in displayData" :key="row.title">
        <td class="text-center">{{ row.type }}</td>
        <td>{{ row.title }}</td>
        <td class="text-center">{{ row.status }}</td>
        <td>{{ row.rating }}</td>
        <td>{{ row.author }}</td>
        <td>{{ row.link }}</td>
        <td class="text-center">
          <router-link :to="{ name: 'Edit', params: { row: row } }"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
            <line x1="16" y1="5" x2="19" y2="8" />
          </svg></router-link>
          <router-link :to="{ name: 'Delete' }"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F44336" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg></router-link>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import store from "store2";

export default {
  name: "MediaTable",
  computed: {
    data: () => {
      return store();
    }
  }
}
</script>