<template>
    <div id="app">
      <fq v-show="$route.meta.footShow"></fq>
      <img src="../static/logo.png" alt="">
      <router-view></router-view>
    </div>


</template>

<script>
  import fq from "./components/fq"
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    "fq":fq,
  }
}
</script>

<style>
  li{
    list-style: none;
    text-align: center;
  }
</style>
