import Vue from 'vue';
import App from './App.vue';
// import NeoUI from '../../lib/k-ui.js';
// import '../../lib/css/k-ui.css';
import NeoUI from '@neokekeke/k-ui';
import '@neokekeke/k-ui/lib/css/k-ui.css';

Vue.use(NeoUI);

new Vue({
    render: h => h(App)
}).$mount('#app');
