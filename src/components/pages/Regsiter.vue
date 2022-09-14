<template>
  <div class="new_reg_box">
    <div class="new_reg_box_title">
      <p>注册用户</p>
    </div>
    <div class="new_reg_box_content">
      <form action="" @submit.prevent="post">
        <span>手机号码：</span>
        <input type="text" class="pass_text_userName" v-model="phone" />
        <br />
        <span>验证码：</span>
        <div class="validate_box">
          <input type="text" class="validate_code" v-model="validateCode" />
          <button class="validate_button" @click="getValidateCode">
            发送验证码
          </button>
        </div>

        <br />
        <span>密码：</span>
        <input type="password" class="pass_text_passWord" v-model="passWord" />
        <br />
        <button class="pass_button" @click="registerHandle">提交</button>
      </form>
    </div>
  </div>
</template>

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



<script>
export default {
  data() {
    return {
      phone: "",
      passWord: "",
      validateCode: "",
    };
  },
  methods: {
    registerHandle() {
      console.log("registerHandle方法");
      if(this.phone === "" || this.phone.length != 11){
          alert("手机号码格式错误，请重新填写！！！");
          return
      }
      console.log(this.phone, this.passWord, this.validateCode);
    },
    getValidateCode() {
      console.log("获取验证码方法");
      console.log(this.phone);
    },
  },
};
</script>
