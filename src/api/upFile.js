const upLoad = function (file, _this) {
  //  创建一个FileReader()对象，它里面有个readAsDataURL方法
  let reader = new FileReader();
  // readAsDataURL方法可以将上传的图片格式转为base64,然后在存入到图片路径,
  //这样就可以上传电脑任意位置的图片
  reader.readAsDataURL(file);
  //文件读取成功完成时触发
  reader.addEventListener("load", function () {
    //  reader.result返回文件的内容。
    //只有在读取操作完成后，此属性才有效，返回的数据的格式取决于是使用哪种读取方法来执行读取操作的。
    //给数组添加这个文件也就是图片的内容
    _this.artList.list.push(this.result);
    _this.src = this.result;
    _this.filePath = file.name;
    _this.isShow = true;
    // console.log(_this.artList.list);
  });
}

export default {
  upLoad,
}