<template>
  <div id="app">
    <Navbar class="nav"></Navbar>
    <router-view class="page"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/Navbar.vue'

export default Vue.extend({
  components:{
    Navbar
  }
})
</script>

<style lang="scss">
#app {
  font-family: "Rubik", sans-serif;
  background-color: #f7f7f7;
  min-height: 100vh;
}
p{
  font-size:16px;
}
* {
  box-sizing: border-box;
  margin: 0;
}
*:focus {
    outline: none;
}
.page{
  padding-top:70px;
    z-index: 1;

}
.nav{
  position: fixed;
  z-index: 3;
}
a { text-decoration: none;color: inherit; }
a:hover{
  color:black;
}

</style>
