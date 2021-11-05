<template>
  <div class="third-section">
    <div class="cta d-flex cta-customize">
      <div class="text">
        <h2>Customize your VPS to fit your needs</h2>
        <p>With our VPS configuration tool</p>
      </div>
      <div class="button">
        <router-link to="/configs">
          <button class="letsgo">Let's go !</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CtaCustomize",
});
</script>
<style lang="scss" scoped>
.cta {
  background-color: white;
  box-shadow: 0px 1px 25px rgba(200, 197, 197, 0.25);
  padding: 34px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 5px;
}
.button {
  display: flex;
  align-items: center;
}
.letsgo {
  background-color: #d3208b;
  color: white;
  padding: 10px 50px 10px 50px;
  border: none;
  border-radius: 5px;
}

.third-section {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0px 30px 0px;
  padding: 0px 20px 0px 20px;
}
.cta-customize {
  width: 100%;
  max-width: 1200px;
}
</style>
