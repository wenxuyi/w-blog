const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        // pathRewrite: {
        //   // 重新路由  localhost:8888/api/login  => www.baidu.com/api/login
        //   '^/api': '' // 假设我们想把 localhost:8888/api/login 变成www.baidu.com/login 就需要这么做 
        // }
      },
      '/uploads': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      }
    }
  }
})
