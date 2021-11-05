<template>
  <div class="nav">
    <div class="navbar w-100">
      <router-link class="link" to="/">
        <img class="logo" alt="Myserver logo" src="../assets/logo-text.png" />
      </router-link>
      <div class="links">
        <router-link to="/offers">
          <p class="link">Our Offers</p>
        </router-link>
        <router-link to="/about">
        <p class="link">About us</p>

        </router-link>
        <router-link to="/configs">
        <button class="cta-offers">Buy now $</button>

        </router-link>
      </div>
      <div class="burger-menu" v-on:click="toggle = !toggle">
        <div class="first"></div>
        <div class="second"></div>
        <div class="third"></div>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="mobile-nav" v-if="toggle" v-on:click="toggle = !toggle">
        <div class="w-100 d-flex justify-content-end">
             <router-link to="/offers">
          <div class="mobile-link">Our Offers</div>
             </router-link>
        </div>
        <div class="w-100 d-flex justify-content-end">
            <router-link to="/about">
          <div class="mobile-link">About us</div>
            </router-link>
        </div>
        <div class="w-100 d-flex justify-content-end">
              <router-link to="/configs">
          <button class="cta-offers">Buy now $</button>
              </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navbar",
  data: function () {
    return {
      toggle: false,
    };
  },
});
</script>
<style lang="scss" scoped>
.nav {
  width: 100vw;
}
.navbar {
  width: 100vw;
  min-height: 70px;
  background-color: white;
  padding: 10px;
  box-shadow: 0px 1px 25px rgba(200, 197, 197, 0.25);
  z-index: 4;
}
.logo {
  height: 40px;
}
.links {
  width: 40%;
  font-size: 20px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-around;
}
.link {
  font-weight: 600;
  margin: 0;
}
.cta-offers {
  border: none;
  background-color: #6078ea;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
}
.burger-menu {
  display: none;
}
.burger-menu div {
  background-color: black;
  height: 5px;
  width: 40px;
  margin: 5px 0px 5px 0px;
  border-radius: 10px;
}
.second {
  opacity: 1;
}
.first,
.second,
.third {
  transition: 0.6s;
}
.burger-menu:hover {
  cursor: pointer;
  .first {
    transform: rotate(405deg) translateY(14px);
  }
  .third {
    transform: rotate(-405deg) translateY(-14px);
  }
  .second {
    opacity: 0;
  }
}
.mobile-link {
  background-color: white;
  padding: 10px 15px 10px 15px;
  border-radius: 25px;
  margin: 10px;
}
.mobile-nav {
  z-index: 1;
  height: 100vh;
  width: 100%;
  background: rgb(96, 120, 234);
  background: linear-gradient(
    180deg,
    rgba(96, 120, 234, 0.4556197478991597) 9%,
    rgba(0, 212, 255, 0) 100%
  );
}
.mobile-nav .cta-offers {
  margin: 10px;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.8s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.8s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100px);
  opacity: 0;
}

@media screen and (max-width: 800px) {
  .links {
    width: 60%;
  }
}
@media screen and (max-width: 768px) {
  .links {
    display: none;
  }
  .burger-menu {
    display: block;
  }
}
</style>
