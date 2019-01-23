// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import '../static/reset.css'
import '../static/style.css'
import router from './router.js'
import FastClick from '../node_modules/fastclick/lib/fastclick.js'


// 全局过滤器
Vue.filter('dateFormatter', function (dataStr, pattern = 'CN-MM-DD') {
    var str = ''
    if (!dataStr) {
        return ''
    }
    var time = new Date(dataStr)
    var m = time.getMonth() + 1
    var d = time.getDate()

    if (pattern === 'CN-MM-DD') {
        str = `${m}月${d}日`
    }
    return str
})

Vue.filter('artistsFormatter', function (dataArr) {
    var str = ''
    if (!dataArr) {
        return ''
    }
    dataArr.forEach((item, i) => {

        if (i > 0) {
            str += ' / ' + item.name
        } else {
            str += item.name
        }
    })
    return str
})

Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
})

Vue.config.host = 'http://192.168.0.106:3000'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})


// FastClick 解决IOS点击延时
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
