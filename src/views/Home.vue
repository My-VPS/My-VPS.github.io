<template>
  <div class="home">
    <div class="first-section">
      <div class="title">
        <p>The best network for your next VPS.</p>
      </div>
      <div class="img">
        <img src="@/assets/hands_homage.png" class="hands" alt="" />
      </div>
    </div>
    <Deals></Deals>
    <div class="wrapper">
      <div class="article">
        <img src="../assets/emoji/hand.png" alt="">
        <h3>The new VPS builder</h3>
        <p>Create a unique experience using our brand new VPS builder with the best network on the market.</p>
      </div>
      <div class="article">
        <img src="../assets/emoji/dino.png" alt="">
        <h3>No competition</h3>
        <p>We defy you to find a service as efficient as ours. Our costumer service is available 24/7 to help you out with your server.</p>
      </div>
      <div class="article">
        <img src="../assets/emoji/face.png" alt="">
        <h3>About us</h3>
        <p>We have been nominated as the best service on the Internet 2021.</p>
      </div>
    </div>
      <CtaCustomize></CtaCustomize>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Deals from "../components/Deals.vue";
import CtaCustomize from "../components/CtaCustomize.vue";
import Footer from "../components/Footer.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Deals,
    CtaCustomize,
    Footer
  },
});
</script>
<style lang="scss" scoped>
.first-section {
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-top: 240px;
  padding: 0px 10px 0px 15px;
  width: 50%;
  display: flex;
  p {
    font-size: 70px;
  }
}

.hands {
  height: 80vh;
  width: auto;
}
.img {
  align-items: flex-end;
  justify-content: center;
  display: flex;
  width: 50%;
}

.wrapper{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding:25px;
  margin:30px 0px 30px 0px;
}
.article{
  width:300px;
  img{
    margin-bottom:15px;
  }
  h3{
    margin-bottom: 15px;
  }
}
@media screen and (max-width: 800px) {
  .title {
    width: 100%;
    margin: 80px 0px 0px 10px;
    p {
      font-size: 40px;
    }
  }
  .img {
    width: 100%;
  }
  .hands {
    height: 400px;
  }
  .wrapper{
  justify-content: flex-start;
}
}
</style>
