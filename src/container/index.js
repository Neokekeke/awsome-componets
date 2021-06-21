import Vue from 'vue';
import App from './App.vue';

// 本地的调试
import NeoUI from '../components/index';
import '../components/styles/index.less';

// 本地打包后调试
// import NeoUI from '../../lib/k-ui.js';
// import '../../lib/css/k-ui.css';

// npm的仓库调试
// import NeoUI from '@neokekeke/k-ui';
// import '@neokekeke/k-ui/lib/css/k-ui.css';

Vue.use(NeoUI);

new Vue({
    render: h => h(App)
}).$mount('#app');
