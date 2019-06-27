<template>
  <div id="app">
<!--    <img :src="src1">-->
    <app-header :Header="Header"></app-header>
    <HelloWorld :src1="src1" :href1="href1"></HelloWorld>
    <app-footer :Footer="Footer"></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import HelloWorld from './components/HelloWorld'
  import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return{
      Header:'Header',
      src1:'../../../static/img/5.jpg',
      href1:'https://www.baidu.com/',
      Footer:'Footer'

    }
  },
  methods:{

  },
  components:{
    "app-header":Header,
    "HelloWorld":HelloWorld,
    "app-footer":Footer
  }
}
</script>

<style scoped>

</style>
