<template>
  <div class="content-box">
    <div class="left-nav">
      <div class="left-nav-box">发布图片</div>
      <div class="left-nav-box">发布文章</div>
    </div>
    <form action="" @submit.prevent="post">
      <div class="right-box">
        <div class="title-box">上传文件</div>
        <div class="fileTitle-box">
          <div class="title-box">文件信息</div>
          <div class="title-box-content">
            <input
              type="text"
              class="fileInput"
              :placeholder="isErr ? '标题不能为空' : '文章标题'"
              :class="{ fileInputErr: isErr }"
              @focus="show"
              v-model="artList.artName"
            />
            <input
              type="text"
              class="fileInput"
              placeholder="作品描述"
              v-model="artList.artDescribe"
            />
          </div>
        </div>

        <div class="fileTitle-box">
          <div class="title-box">图片文件</div>
          <div class="title-box-content">
            <div class="uploadimg-box">
              <img :src="src" class="showImg" v-show="isShow" alt="" />
              <div class="upload-warpper">
                <input type="file" class="upload" @change="upLoad" />
                <img
                  src="../../assets/upLoadImg.png"
                  class="upLoadImg"
                  alt="上传文件"
                />
                <!-- <span class="img-box-text">选择要上传的图片</span> -->
              </div>
            </div>
            <input
              type="text"
              class="fileInput"
              :value="filePath"
              v-bind:placeholder="fileAdd"
              disabled
            />
          </div>
        </div>
        <div class="title-box-content">
          <button class="submit-btn" @click="upFile">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import api from "../../api/index";

export default {
  data() {
    return {
      fileAdd: "文件地址",
      filePath: "",
      isShow: false,
      isErr: false,
      artList: {
        artName: "",
        artDescribe: "",
        list: [],
      },
      src: "",
    };
  },
  methods: {
    show() {
      this.isErr = false;
    },
    upLoad(file) {
      let item = file.target.files[0];
      //正则表达式，判断每个元素的type属性是否为图片形式，如图
      if (!/image\/\w+/.test(item.type)) {
        // 提示只能是图片，return
        alert("只能选择图片,png/jpg格式文件");
        return;
      }
      //判断文件是否大于5M
      if (item.size > 5242880) {
        alert("文件大小超过5M");
        return;
      }
      //上传文件方法 item为图片信息，this为当前实例对象
      api.upFile.default.upLoad(item, this);
    },
    upFile() {
      if (!api.checkdatas.default.isNull(this.artList.artName)) {
        alert("文章标题不能为空");
        this.isErr = true;
        return;
      }
      if (this.artList.list.length === 0) {
        alert("图片不能为空");
        // console.log()
        return;
      }
      // console.log(this.list.length);
      api.requests.default.upFile(this.artList);
    },
  },
};
</script>

<style>
/* form {
  width: 100%;
} */
.uploadimg-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}
.submit-btn {
  width: 370px;
  height: 41px;

  background: #fef035;
  border-radius: 4px;
  border: none;
}
.img-box-text {
  color: rgba(0, 0, 0, 0.5);
}
.upload-warpper {
  position: relative;
  display: flex;
  /* 水平居中 */
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
  gap: 10px;

  width: 400px;
  height: 300px;
  text-align: center;
  border: 2px dashed #666666;
  border-radius: 10px;
  background-color: #fafafa;
}
.upLoadImg {
  position: absolute;
  top: auto;
  left: auto;
  width: 100px;
  height: 100px;
  opacity: 0.3;
}

.upload {
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 100;
}
.fileInput {
  padding: 12px 15px;

  width: 60%;
  height: 44px;

  border: 1px solid #e3e3e3;
  border-radius: 4px;
}
.fileInputErr {
  font-weight: 600;
  color: #fa0a0a;
  border: 1.5px solid #fa0a0a;
}
.showImg {
  max-width: 400px;
  min-width: 100px;
}
.title-box-content {
  /* 自动布局 */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 30px;
  gap: 10px;

  width: 100%;

  border-top: 0.1px solid rgb(229, 229, 229);
  background: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}
#app {
  background: #ededed;
}
.left-nav {
  /* 自动布局 */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 297px;
  height: 124px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.right-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  padding: 0px;
  margin-bottom: 100px;


  flex: none;
  order: 1;
  flex-grow: 0;
}
.content-box {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin: 4%;
  gap: 30px;
}
.left-nav-box {
  width: 100%;
  text-align: center;
  line-height: 60px;
  font-size: 18px;

  background: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}
.title-box {
  /* 自动布局 */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 10px;

  width: 70vw;
  min-width:30vw;
  height: 65px;

  font-size: 18px;
  font-weight: 500px;

  background: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
</style>