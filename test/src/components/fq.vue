<template>
    <div id="fq">
      <ul>
        <li><router-link to="/">a</router-link></li>
        <li><router-link to="/b">b</router-link></li>
        <li><router-link to="/c">c</router-link></li>
        <li><router-link to="/d">d</router-link></li>
        <li><router-link to="/e">e</router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "fq"
    }
</script>

<style scoped>
    #fq{
      width:100%;
    }
  ul{
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  li{
    width: 20%;
  }
  a{
    display: inline-block;
    width: 100%;
  }
</style>
