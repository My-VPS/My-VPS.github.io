<template>
  <div class="configs">
    <h2>2. Chose your OS</h2>
    <div class="container-configs">
      <div class="os-card" v-for="i in os" :key="i">
        <div class="content">
          <img :src="require(`@/assets/${i}.png`)" alt="" />
        </div>
        <div class="content">
          <button :class="{ disabled: notSelectedOs(i) }" @click="selectOs(i)">
            Select
          </button>
        </div>
      </div>
      <div class="article">
        <img src="../assets/emoji/dino.png" alt="" />
        <h3>Why add a bonus ?</h3>
        <p>We have been nominated as the best service on the Internet 2021.</p>
      </div>
    </div>
    <button class="change-button" v-if="clicked" @click="changeOs()">
      Change OS
    </button>
    <transition name="slide-fade">
      <h2 v-if="clicked">4. Enter your hostname</h2>
    </transition>
    <transition name="slide-fade">
      <div class="host-card" v-if="clicked">
        <div class="host-content">
          <input
            type="text"
            name=""
            placeholder="MyServer.com"
            v-model="hostname"
            id=""
          />
          <router-link
            :to="
              '/checkout/' +
              $route.params.ram +
              '/' +
              $route.params.cpu +
              '/' +
              $route.params.ssd +
              '/' +
              selectedOs +
              '/' +
              hostname
            "
          >
            <button>Add hostname</button>
          </router-link>
        </div>
      </div>
    </transition>
    <p class="warn" v-if="checkUrl == false && clicked == true">
      Enter a valid URL name
    </p>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Footer from "../components/Footer.vue";

export default Vue.extend({
  name: "SecondConfigs",
  data: function () {
    return {
      clicked: false,
      os: ["ubuntu", "linux", "debian"],
      select: [false, false, false],
      selectedOs: "",
      hostname: "",
      showWarning: false,
    };
  },
  computed: {
    checkUrl() {
      if (
        /^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z]{3,6}$/.test(
          this.hostname
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    notSelectedOs(i: string) {
      if (this.selectedOs) {
        if (i !== this.selectedOs) {
          return true;
        }
      }
    },
    selectOs(i: string) {
      this.selectedOs = i;
      this.clicked = true;
    },
    changeOs() {
      this.clicked = false;
      this.selectedOs = "";
      this.hostname = "";
    },
  },

  components: {
    Footer,
  },
});
</script>
<style lang="scss" scoped>
.configs {
  padding-left: 20px;
  padding-right: 20px;
}
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
.container-configs {
  display: flex;
  flex-wrap: wrap;
}
h2 {
  margin: 50px 0px 30px 0px;
  font-size: 24px;
}
.os-card {
  background-color: white;
  padding: 20px;
  box-shadow: 0px 1px 25px rgba(200, 197, 197, 0.25);
  width: 260px;
  margin-right: 30px;
  img {
    height: 150px;
    margin: 20px 0px 40px 0px;
  }
  .content {
    display: flex;
    justify-content: center;
  }
  button {
    background-color: #6078ea;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 32px 8px 32px;
  }
}
.warn {
  margin-top: 20px;
  font-size: 12px;
  font-style: italic;
  color: #d3208b;
}
.change-button {
  background-color: #d3208b;
  opacity: 0.5;
  font-style: italic;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
}
.change-button:hover {
  opacity: 1;
}

.host-card {
  background-color: white;
  padding: 20px;
  box-shadow: 0px 1px 25px rgba(200, 197, 197, 0.25);
  display: inline-block;
  button {
    background-color: #d3208b;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 32px 8px 32px;
    margin: 0px 0px 0px 20px;
  }
  input {
    border: 1px solid rgba(200, 197, 197, 0.73);
    border-radius: 5px;
    padding: 0px 0px 0px 10px;
  }
}
.host-content {
  display: flex;
}
.article {
  width: 300px;
  margin: 30px 0px 0px 30px;
  img {
    margin-bottom: 15px;
  }
  h3 {
    margin-bottom: 15px;
  }
}
.selected {
  border: 0.5px solid #6078ea;
}
@media screen and (max-width: 600px) {
  .os-card {
    order: 2;
    width: 100%;
    margin-right: 0px;
  }
}

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

@media screen and (max-width: 1200px) {
  .article {
    order: 1;
    width: 100%;
    margin: 30px 0px 0px 0px;
  }
  .os-card {
    order: 2;
    margin-bottom: 30px;
  }
}
</style>
