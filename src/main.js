import { createApp } from 'vue'
import vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入jQuery
import $ from 'jquery'


// 引用bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


createApp(App).use(router).mount('#app')


