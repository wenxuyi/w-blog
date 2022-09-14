<template>
  <WebNavigator website_name="W Blog" />
  <WebRecommend v-show="$route.meta.show" />
  <!-- <BlogList v-show="$route.meta.show"/> -->
  <router-view></router-view>
  <WebFooter website_name="W Blog" />
</template>

<script>
import WebNavigator from "./components/Navigator.vue";
import WebRecommend from "./components/Recommend.vue";
import BlogList from "./components/pages/BlogList.vue";
import WebFooter from "./components/WebFooter.vue";

export default {
  name: "App",
  components: {
    WebNavigator,
    WebRecommend,
    BlogList,
    WebFooter,
  },
};
</script>

<style>
</style>
