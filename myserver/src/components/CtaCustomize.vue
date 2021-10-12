<template>
  <div class="cta d-flex">
    <div class="text">
        <h2>Customize your VPS to fit your needs</h2>
        <p>With our VPS configuration tool</p>
    </div>
    <div class="button">
        <button class="letsgo">
            Let's go !
        </button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"CtaCustomize"
})
</script>
<style lang="scss" scoped>
.cta{
    background-color:white;
    box-shadow: 0px 1px 25px rgba(200, 197, 197, 0.25);
    padding:34px;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 5px;
}
.button{
    display:flex;
    align-items: center;
}
.letsgo{
    background-color:#d3208b;
    color:white;
    padding:10px 50px 10px 50px;
    border:none;
    border-radius:5px;
}
</style>
