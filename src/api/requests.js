const axios = require("axios")
let urlLastWord = '.json';

export default {
  //手机验证码请求
  getPhone(phone) {
    // console.log("getPhone方法执行");
    axios({
      method: "GET",
      url: '/api/v1/verification_codes/' + phone + urlLastWord,
    }).then(response => {
      let data = response.data;
      if (data.msg) {
        alert("手机号码已注册，请重新填写");
        return
      }
      console.log(data);
    });
  },
  //注册请求
  ValidateCode(user) {
    return axios({
      method: "POST",
      data: {
        verification_code: user.validateCode,
        user: {
          phone: user.phone,
          password: user.passWord
        }
      },
      url: '/api/v1/users' + urlLastWord,
    });
  },

  //登录请求
  login(phone, passWord) {
    // console.log(passWord);
    return axios({
      method: "POST",
      data: {
        user: {
          phone: phone,
          password: passWord,
        }
      },
      url: 'api/v1/users/log_in' + urlLastWord
    });
  },
  upFile(artLsit){
    console.log(artLsit);
    console.log(artLsit.artName,artLsit.artDescribe);
    // return axios({
    //   method: "POST",
    //   data: {
    //     user: {
    //       phone: phone,
    //       password: passWord,
    //     }
    //   },
    //   url: 'api/v1/users/log_in' + urlLastWord
    // });
  }
}