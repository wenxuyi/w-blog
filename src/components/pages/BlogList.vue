<template>
  <div class="content-box">
    <div class="content-box_card_item" v-for="b in blogs" :key="b.title">
      <div class="cardCoverBox">
        <a href="https://www.runoob.com" target="_blank">
          <img class="cardCoverBox-img" :src="b.img_url" alt="图片" />
        </a>
      </div>
      <div class="cardTitle">
        <span>{{ b.title }}</span>
      </div>
      <div class="cardBottom">
        <div class="userInfor">
          <img class="userIcon" src="" alt="" />
          <span class="userName">用户名</span>
        </div>
      </div>
    </div>

    <!-- <span v-for="b in blogs" class="blog" :key="b.title">
      {{ b.title }}
    </span> -->
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "BlogList",
  // props: {
  //   msg: String
  // },
  data() {
    return {
      blogs: [],
      error_msg: "",
    };
  },
  created() {
    this.getBlogList();
  },
  methods: {
    getBlogList() {
      axios({
        method: "GET",
        url: "/api/v1/blogs.json",
      }).then((response) => (this.blogs = response.data));
    },
  },
  computed: {},
};
</script>

  <style>
/* 中间容器 grid布局，一排5个内容，间隔20px */
div.content-box {
  margin: 0 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px 20px;
  box-sizing: border-box;
  max-width: 1920px;
  min-width: 1200px;
}
/* 单个卡片容器 */
div.content-box_card_item {
  width: 100%;
  border: 1px solid #f1f1f1;
}
/* 卡片容器内部图片 */
img.cardCoverBox-img {
  width: 100%;
  height: 100%;
}
/* 卡片容器内部标题的容器 */
div.cardTitle {
  /* height: 44px; */
  margin-top: 8px;
  padding: 0 10px;
}
/* 卡片容器标题 */
div.cardTitle span {
  display: inline-block;
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  color: #000;
}
/* 卡片容器内部作者信息的容器 */
div.cardBottom {
  padding: 0 10px;
  margin: 4px 0 8px 0;
  /* padding-bottom: 10px; */
}
</style>