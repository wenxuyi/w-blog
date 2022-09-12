<template>
  <div class="footer">
    <div>
      <span>{{ website_name }}</span>
    </div>
  </div>
</template>

<script>
  export default {
		name: 'WebFooter',
		props: {
			website_name: String
		}
	}
</script>

<style>
  div.footer {
    height: 32px;
    background-color: rgb(236, 230, 230);
    /* footer包含的div宽度设置为100%会导致宽度超出屏幕，通过在其外层(也就是当前位置)添加 overflow:hidden 来解决 */
    overflow: hidden;
    position: fixed;
    width: 100%;
    bottom: 0;
  }

  div.footer div {
    /* 保持在页面最下方 */
    /* position: relative; */
    /* position: relative;
    bottom: 0;
    width: 100%; */
    /* padding: 0; */
  }

  div.footer div span {
    /* 文字垂直居中 */
		line-height: 32px;
    font-size: 14px;
    display: inline-block;
    /* width: 1000px; */
    /* display: inline-block;
    width: 100%; */
    float: right;
    margin-right: 2%;
    
  }
</style>