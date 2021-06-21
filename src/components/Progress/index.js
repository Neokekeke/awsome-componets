/* eslint-disable no-unused-vars */
import Progress from './index.vue';

// install 方法提供是为了引用方use，如vue.use(xxx)
Progress.install = (Vue) => {
    Vue.component(Progress.name, Progress);
};

export default Progress;
