/* eslint-disable no-unused-vars */
import Button from '@components/Button';

// 导入的组件列表
const components = [
    Button
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

export default {
    Button
};
