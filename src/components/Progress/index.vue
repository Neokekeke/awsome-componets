<template>
  <div class="n-progress">
    <div
      class="n-progress-normal"
      :style="{ width: `${percent}px` }"
    ></div>
    <div class="test">
      <n-button
        label="暂停"
        @onClick="handleStop"
      ></n-button>
      <n-button
        label="刷新"
        @onClick="handleRefresh"
      ></n-button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NProgress',
    props: {
        percent: {
            type: Number,
            default: 0
        }
    },
    methods: {
        handleStop(){
            this.$emit('onStop');
        },
        handleRefresh(){
            this.$emit('onRefresh', 0);
        }
    }
};
</script>
<style lang="less" scoped>
.test {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
</style>