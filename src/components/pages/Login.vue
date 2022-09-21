<template>
  <div class="new_reg_box">
    <div class="new_reg_box_title">
      <p>用户登录</p>
    </div>
    <div class="new_reg_box_content">
      <form action="" @submit.prevent="post">
        <span>账号：</span>
        <input type="text" class="pass_text_userName" v-model="userName" />
        <br />
        <span>密码：</span>
        <input type="password" class="pass_text_passWord" v-model="passWord" />
        <br />
        <button class="pass_button" @click="login">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from "../../api/index";

export default {
  data() {
    return {
      userName: "",
      passWord: "",
    };
  },
  methods: {
   async login() {
      //验证用户输入手机号
      if (!api.checkdatas.default.checkPhoneNumber(this.userName)) {
        return;
      }
      if (!api.checkdatas.default.checkUserPassword(this.passWord)) {
        return;
      }
      let res = await api.requests.default
        .login(this.userName, this.passWord)
        .then(y => y);
      console.log(res);
      if (res.status != 200) {
        alert("服务器繁忙，请稍后再试");
        return;
      }
      if (res.data.error_msg) {
        alert(res.data.error_msg);
        return;
      }
      alert("登录成功");
      localStorage.setItem('TOKEN',res.data.token);
      this.$router.push("/Home");
    },
  },
};
</script>

<style>
.new_reg_box {
  /* 自动布局 */

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 200px auto;
  border: 1px solid #d9d9d9;

  width: 800px;
  background-color: #ffffff;
}
.new_reg_box_title {
  /* 自动布局 */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;

  width: 100%;
  height: 70px;

  background: #fef035;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.new_reg_box_title p {
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 0px;
}

.new_reg_box_content {
  /* 自动布局 */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 30px;
  gap: 20px;

  width: 100%;

  background: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}
.validate_box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.new_reg_box_content input {
  box-sizing: border-box;

  /* 自动布局 */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 15px;
  margin-top: 4px;
  gap: 5px;

  width: 100%;
  height: 44px;

  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}
.validate_box input {
  width: 60%;
}
.validate_button {
  width: 40%;
  height: 44px;
  border: 0px;
  margin-top: 4px;
  border-radius: 4px;
  flex: none;
  order: 2;
  flex-grow: 0;
}
.pass_button {
  display: block;
  /* 自动布局 */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 150px;
  gap: 10px;

  width: 100%;
  height: 44px;
  border: 0px;

  background: #fef035;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
}
</style>