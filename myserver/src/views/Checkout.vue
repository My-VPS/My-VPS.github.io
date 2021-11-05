<template>
  <div class="checkout">
    <h1 v-if="!clicked">Your custom VPS, just a click away.</h1>
    <div class="reciept-text" v-if="!clicked">
      <div class="wrapper">
        <p class="label">RAM</p>
        <p>{{ $route.params.ram }} GB</p>
      </div>
      <div class="wrapper">
        <p class="label">CPU</p>
        <p>{{ $route.params.cpu }} GB</p>
      </div>
      <div class="wrapper">
        <p class="label">SSD</p>
        <p>{{ $route.params.ssd }} Cores</p>
      </div>
      <div class="wrapper">
        <p class="label">OS</p>
        <p>{{ $route.params.os }}</p>
      </div>
      <div class="wrapper last">
        <p class="label">Name</p>
        <p>{{ $route.params.hostname }}</p>
      </div>
      <hr class="line" />
      <div class="wrapper">
        <p class="label">Total :</p>
        <p>{{totalPrice}} €/month</p>
      </div>
      <div class="button">
        <button @click="clicked = !clicked">Checkout</button>
      </div>
    </div>
    <div class="tank-you" v-if="clicked">
      <h1>Thank you so much for your order ! 🚀</h1>
      <p>We look forward to hearing from you soon</p>
      <button @click="clicked = !clicked">See your order</button>
      <div class="community"></div>
    </div>

    <img class="ok-hand" src="../assets/hands_ok.png" alt="" />
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Footer from "../components/Footer.vue";

export default Vue.extend({
  name: "Checkout",
  data: function () {
    return {
      clicked: false,
    };
  },
  computed: {
    totalPrice(){
      var price = 0
      if(this.$route.params.ram >4){
        price += 4
      }else if(this.$route.params.ram >8){
        price += 6
      }else{
        price +=2
      }
      if(this.$route.params.cpu >4){
        price += 4
      }else if(this.$route.params.cpu >8){
        price += 6
      }else{
        price +=2
      }
      price += this.$route.params.cpu*1.5
      return price
    }
  },
  components: {
    Footer,
  },
});
</script>
<style lang="scss" scoped>
h1 {
  margin: 60px 0px 30px 0px;
  max-width: 430px;
}
.label {
  font-weight: bold;
}
.checkout {
  padding-left: 30px;
  padding-right: 30px;
}
.footer {
  padding: 90px 0px 30px 0px;
  background-color: #f7f7f7;
  text-align: center;
  p {
    font-size: 16px;
  }
}
.ok-hand {
  position: absolute;
  top: 10%;
  right: 0%;
  z-index: 0;
}
.wrapper {
  display: flex;
}
.last {
  margin-bottom: 100px;
}
.label {
  width: 70px;
}
.reciept-text {
  background-color: white;
  padding: 50px;
  box-shadow: 0px 1px 25px rgba(200, 197, 197, 0.25);
  width: 50%;
  z-index: 2;
}
.thank-you {
  z-index: 2;
}
button {
  background-color: #d3208b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 32px 8px 32px;
}
.button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    margin: 0px 0px 0px 20px;
  }
}

hr .line {
  margin: 100px 0px 30px 0px;
  border: 0.2px solid #e2e1e1;
}
@media screen and (max-width: 800px) {
  .reciept-text {
    width: 100%;
  }
  .ok-hand {
    display: none;
  }
}
</style>
