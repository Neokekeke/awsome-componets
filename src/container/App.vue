<template>
  <div class="test-container">
    <h1>Awsome Components Start Here ！</h1>
    <h1>Created By Neokekeke ！</h1>
    <div id="gap"></div>
    <div class="test-component-container">
      <h2>Button</h2>
      <ul>
        <li
          v-for="item in btnType"
          :key="item"
        >
          <n-button
            :type="item"
            @onClick="onClick"
          ></n-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NButton from '../components/Button/index.vue';
export default {
    name: 'APP',
    components: {
        'n-button': NButton
    },
    data(){
        return {
            btnType: ['normal', 'primary', 'success', 'warning','error']
        };
    },
    methods: {
        onClick(){
            console.log('click the btn');
        }
    }
};
</script>

<style lang="less" scoped>
@import url("../components/styles/common/vars.less");

.test-container {
    padding: 50px;

    #gap {
        height: 1px;
        background: @color-border-normal;
    }

    .test-component-container {
        margin: 10px 0;

        h2 {
            font-size: @font-size-20;
            font-weight: normal;
        }

        ul {
            border: 1px solid @color-border-normal;
            background: @color-component-bg;
            padding: 20px;
            margin: 0;
            list-style-type: none;
            display: flex;
            align-items: center;
            flex-flow: row wrap;

            li {
                margin: 5px;
                margin-right: 15px;
            }

            li:first-child {
                margin-left: 0;
            }
        }
    }
}
</style>
