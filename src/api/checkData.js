

export default {
  checkPhoneNumber(data) {
    if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(data)) {
      alert("手机号码错误，请重新填写！！！");
      return false;
    }
    return true;
  },
  checkUserPassword(data) {
    if (data === "" || data.length <= 5) {
      alert("密码错误，请重新填写！！！");
      return false;
    } else {
      return true;
    }
  },
  isNull(data){
    if (data === "" || data.length === 0) {
      return false;
    } else {
      return true;
    }
  }

}