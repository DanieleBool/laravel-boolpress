window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Vue = require('vue');

import App from "./App.vue";

import router from "./components/router";

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
});

router.beforeEach((to, from, next) => {
    let temp = `Boolpress - ${to.meta.title}`
    if(to.meta.title){
        document.title = temp
    } else {
        document.title = `Boolpress - ${to.params.title}`
    }
    next()
})
