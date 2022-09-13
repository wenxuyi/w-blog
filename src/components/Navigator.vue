<template>
  <div id="nav">
    <span class="website_name"
      ><strong>{{ website_name }}</strong></span
    >
    <span>
      <router-link to="/Home">首页</router-link>
    </span>
    <!-- <div class="btu_sign_up"> -->
    <router-link to="/Regsiter"><span class="sign_up">注册</span></router-link>
    <!-- </div> -->
    <router-link to="/login" class="login">登录</router-link>
  </div>
</template>

<script>
export default {
  name: "WebNavigator",
  props: {
    website_name: String,
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
.login {
  height: 100%;
  padding: 11px 24px;
  /* padding: 0 24px; */
  float: right;
  color: #000;
  text-decoration: none;
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