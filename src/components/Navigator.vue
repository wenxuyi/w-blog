<template>
  <div id="nav">
    <span class="website_name">
      <strong>{{ website_name }}</strong>
    </span>
    <router-link to="/Home">
      <span class="nav-list">首页</span>
    </router-link>
    <router-link to="/UpFile">
      <span class="nav-list">上传文件</span>
    </router-link>
    <!-- <div class="btu_sign_up"> -->
    <router-link to="/Regsiter">
      <span class="sign_up">注册</span>
    </router-link>
    <!-- </div> -->
    <router-link to="/login" class="login">
      <span class="nav-list login">登录</span>
    </router-link>
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
#nav {
  padding: 0 4%;
}
a {
  color: #000;
  text-decoration: none;
}
.nav-list {
  display: inline-block;
  text-decoration: none;
  height: 100%;
  padding: 0 12px;
  color: #000;
}
.nav-list:hover {
  transition: 0.3s;
  background-color: rgba(136, 136, 136, 0.3);
}

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
  /* margin-left: 1%; */
  margin-right: 2%;
}
/* div.btu_sign_up{
	margin: 15px;
} */
.login {
  float: right;
}

span.sign_up {
  padding: 0 20px;
  /* width: 40px; */
  height: 100%;
  background-color: black;
  color: #fff;
  float: right;
  /* margin-right: 3%; */
}

span a {
  color: black;
  text-decoration: none;
}
</style>