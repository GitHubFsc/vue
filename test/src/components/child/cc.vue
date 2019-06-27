<template>
    <div id="cc">
      <ul>
        <li><router-link to="/c/">c1</router-link></li>
        <li><router-link to="/c/c2">c2</router-link></li>
        <li><router-link to="/c/c3">c3</router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "cc"
    }
</script>

<style scoped>
  #cc{
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
