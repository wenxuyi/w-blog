<template>
  <WebNavigator website_name="W Blog"/>
  <WebRecommend/>
  <BlogList/>
  <WebFooter website_name="W Blog"/>
</template>

<script>
import WebNavigator from './components/Navigator.vue'
import WebRecommend from './components/Recommend.vue'
import BlogList from './components/BlogList.vue'
import WebFooter from './components/WebFooter.vue'

export default {
  name: 'App',
  components: {
    WebNavigator,
    WebRecommend,
    BlogList,
    WebFooter
}
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
  border: 0px;
}
</style>
