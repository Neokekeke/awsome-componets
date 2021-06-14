/* eslint-disable no-unused-vars */
import Button from './index.vue';

// install 方法提供是为了引用方use，如vue.use(xxx)
Button.install = (Vue) => {
    Vue.component(Button.name, Button);
};

export default Button;
