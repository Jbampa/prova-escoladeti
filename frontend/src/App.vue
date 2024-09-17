<template>
  <div id="app">
    <ComputadorList />
  </div>
</template>

<script>
import ComputadorList from './components/ComputadorList.vue';

export default {
  components: {
    ComputadorList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}
</style>
