<template>
  <div class="offers">
    <Deals></Deals>
    <div class="third-section">
      <CtaCustomize class="cta-customize"></CtaCustomize>
    </div>
    <div class="footer">
            <p>Coded with ❤️ by Ducki and Léa</p>
      </div>
  </div>

</template>
<script lang="ts">
import Vue from "vue";
import Deals from "../components/Deals.vue";
import CtaCustomize from "../components/CtaCustomize.vue";

export default Vue.extend({
  name: "Offers",
  components: {
    Deals,
    CtaCustomize,
  },
});
</script>
<style lang="scss" scoped>
.offers {
  background-color: #6078ea;
  min-height: 100vh;
}
.footer{
    padding:60px 0px 30px 0px;
    text-align: center;
    color:white;
    p{
        font-size:16px;
    }
}

</style>
