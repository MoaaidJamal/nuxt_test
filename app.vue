<script setup>
import axios from 'axios';

const config = useRuntimeConfig();
let users = await axios.get(config.public.apiBase + '/users')
  .then(response => {
    return response.data
  })
  .catch(error => {
    console.log(error)
  })
</script>
<template>
  <div>
    <ul>
      <li v-for="user in users">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
