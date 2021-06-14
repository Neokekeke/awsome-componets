<template>
  <div>
    <button
      class="n-button"
      :style="{
        background: btnColorBase[type],
        color: colorBase[type] || colorBase['white']
      }"
      @click="onClick"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
    name: 'NButton',
    props: {
        type: {
            type: String,
            default: 'normal'
        },
        label: {
            type: String,
            default: '按钮'
        }
    },
    data(){
        return {
            colorBase: {
                normal: '#606266',
                white: '#fff'
            },
            btnColorBase: {
                normal: '#fff',
                primary: '#409eff',
                success: '#67c23a',
                warning: '#e6a23c',
                error: '#f56c6c'
            }
        };
    },
    methods: {
        onClick(){
            console.log(`btn ${this.type} click`);
            this.$emit('onClick');
        }
    }
};
</script>

<style lang="less" scoped>
.n-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

    &:hover {
        filter: brightness(115%);
        border: 1px solid #dcdfe6;
    }
}
</style>
