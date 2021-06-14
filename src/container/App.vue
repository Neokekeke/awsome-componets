<template>
  <div class="test-container">
    <h1>Awsome Components Start Here ！</h1>
    <ul>
      <li><NButton></NButton></li>
      <li>
        <NButton
          type="primary"
          @onClick="onClick"
        ></NButton>
      </li>
    </ul>
  </div>
</template>

<script>
import NButton from '../components/Button/index.vue';
export default {
    name: 'APP',
    components: {
        NButton
    },
    methods: {
        onClick(){
            console.log('click the btn');
        }
    }
};
</script>

<style lang="less" scoped>
.test-container {
    padding: 50px;

    div {
        margin: 10px 0;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        align-items: center;

        li {
            margin: 5px;
        }

        li:first-child {
            margin-left:  0;
        }
    }
}
</style>
