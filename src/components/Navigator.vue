<template>
  <div id="nav">
    <span class="website_name"
      ><strong>{{ website_name }}</strong></span
    >
    <span>
      <a href="http://localhost:8080/">首页</a>
    </span>
    <!-- <div class="btu_sign_up"> -->
    <a href="" v-on:click="toRegister" translate=""><span class="sign_up">注册</span></a>
    <!-- </div> -->
    <span class="login">登录</span>
  </div>
</template>

<script>
export default {
  name: "WebNavigator",
  props: {
    website_name: String,
  },
  methods: {
    toRegister() {
      this.$router.replace("/Register");
    },
  },
};
</script>

<style>
div#nav {
  height: 50px;
  background-color: rgb(255, 242, 0);
  margin-bottom: 1%;
}

div#nav span {
  /* 文字垂直居中 */
  line-height: 50px;
}

span.website_name {
  margin-left: 3%;
  margin-right: 5%;
}
/* div.btu_sign_up{
	margin: 15px;
} */
span.login {
  float: right;
  margin-right: 1.5%;
}

span.sign_up {
	padding: 0 20px;
	/* width: 40px; */
	height: 100%;
	background-color: black;
	color: #fff;
  float: right;
  margin-right: 3%;
}

span a {
  color: black;
  text-decoration: none;
}
</style>