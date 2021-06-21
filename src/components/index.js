/* eslint-disable no-unused-vars */
import './styles/index.less';
import Button from '@components/Button/index.js';
import Progress from '@components/Progress/index.js';

// 导入的组件列表
const components = [
    Button,
    Progress
];

// 注册导入的组件
const install = (Vue, options) => {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue){
    install(window.Vue);
}

console.log('window---', window, Button);

export default {
    install,
    Button,
    Progress
};
