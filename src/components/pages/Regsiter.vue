<template>
  <div class="new_reg_box">
    <div class="new_reg_box_title">
      <p>注册用户</p>
    </div>
    <div class="new_reg_box_content">
      <form action="" @submit.prevent="post">
        <span>手机号码：</span>
        <input type="text" class="pass_text_userName" v-model="user.phone" />
        <br />
        <span>验证码：</span>
        <div class="validate_box">
          <input type="text" class="validate_code" v-model="user.validateCode" />
          <button class="validate_button" @click="getValidateCode">
            发送验证码
          </button>
        </div>

        <br />
        <span>密码：</span>
        <input type="password" class="pass_text_passWord" v-model="user.passWord" />
        <br />
        <button class="pass_button" @click="registerHandle">提交</button>
      </form>
    </div>
  </div>
</template>



<script type="mudole">
import api from "../../api/index";

export default {
  data() {
    return {
      user: {
        phone: "",
        passWord: "",
        validateCode: ""
      }
    }
  },
  methods: {
    //获取用户手机验证码
    getValidateCode() {
      //验证用户输入手机号
      if (!api.checkdatas.default.checkPhoneNumber(this.user.phone)) {
        return;
      }
      api.requests.default.getPhone(this.user.phone);
    },
    async registerHandle() {
      // console.log("注册方法执行");
      if (!api.checkdatas.default.checkPhoneNumber(this.user.phone)) {
        return;
      }
      if (!api.checkdatas.default.checkUserPassword(this.user.passWord)) {
        return;
      }
      let a = await api.requests.default
        .ValidateCode(this.user)
        .then((y) => y);
      console.log(a);
      // console.log(a.data.error_msg);
      // console.log(a.status);
      if (a.status != 200) {
        alert("服务器繁忙，请稍后再试");
        return;
      }
      if (a.data.error_msg) {
        alert(a.data.error_msg);
        return;
      }
      alert("注册成功");
      this.$router.push("/Login");
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
.inputRed {
  border: 2px solid red;
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