<template>
  <div class="hello">
    <a :href="href1">百度</a>
    <img :src="src1">
    <h1>usbvik</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:["src1","href1"],
  /*props:{
    src1:{
      type:String
    },
    href1:{
      type:String
    }
  },*/
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
