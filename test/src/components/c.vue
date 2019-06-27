<template>
  <div id="c">
    <cc></cc>
    <router-view></router-view>
  </div>
</template>

<script>
  import cc from "./child/cc"
    export default {
        name: "c",
      components:{
          "cc":cc
        }

    }
</script>

<style scoped>

</style>
