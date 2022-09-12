<template>
  <div class="d-flex flex-wrap">
    <span v-for="u in users" class="blog" :key="u.title">
      {{ u.title }}
    </span>
    <!-- {{ users }} -->
  </div>
</template>

<script>
// import 'bootstrap'
const axios = require("axios");

export default {
  name: "UserList",
  props: {
    msg: String,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      // this.users = 'aaa'
      axios({
        method: "GET",
        headers: { "Content-Type": "application/json" },
        url: "api/v1/blogs.json",
      }).then((response) => (this.users = response.data));
      // this.users = axios.get('api/v1/blogs', {headers: {'content-type': 'application/json'}}).then((response) => response.data)
    },
  },
};
</script>

<style>
span.blog {
  display: inline-block;
  width: 20%;
  /* height: ; */
  border: 1px solid black;
  margin: 10px;
}
</style>