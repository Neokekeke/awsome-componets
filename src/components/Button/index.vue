<template>
  <button
    class="n-button"
    :class="'n-button-' + type"
    @click="onClick"
  >
    {{ label }}
  </button>
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
    methods: {
        onClick(e){
            this.$emit('onClick', { event: e, btnType: this.type });
        }
    }
};
</script>
