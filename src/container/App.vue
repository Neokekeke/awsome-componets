<template>
  <div class="test-container">
    <h1>Awsome Components Start Here ！</h1>
    <h1>Created By Neokekeke ！</h1>
    <div id="gap"></div>

    <!-- Button -->
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

    <!-- Progress -->
    <div class="test-component-container">
      <h2>Progress</h2>
      <ul>
        <li>
          <n-progress
            :percent="percent"
            @onStop="onStop"
            @onRefresh="onRefresh"
          >
          </n-progress>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'APP',
    data(){
        return {
            btnType: ['normal', 'primary', 'success', 'warning', 'error'],
            percent: 0,
            timer: null
        };
    },
    mounted(){
        this.timer = setInterval(() => {
            if (this.percent < 100){
                this.percent += 20;
            } else {
                this.percent = 0;
            }
        }, 1000);
    },
    destroyed(){
        this.clearTimer();
    },
    methods: {
        onClick({ btnType }){
            console.log(`click the ${btnType} btn`);
        },
        onStop(percent){
            console.log('暂停当前进度', percent);
            this.clearTimer();
        },
        onRefresh(percent){
            this.percent = percent;
        },
        clearTimer(){
            this.timer && clearInterval(this.timer);
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
                position: relative;
            }

            li:first-child {
                margin-left: 0;
            }
        }
    }
}
</style>
