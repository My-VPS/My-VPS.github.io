<template>
  <div class="configs">
    <h2>1. Chose your configurations</h2>
    <div class="page-wrap">
      <div class="configs-block">
        <div class="wrapper">
          <p class="criteria">RAM</p>
          <div class="bareme">
            <div
              class="number"
              v-for="i in ram"
              :key="i"
              @click="(e) => e.target.classList.toggle('number-selected')"
            >
              {{ i }}
            </div>
          </div>
          <p class="unit">GB</p>
        </div>
        <div class="wrapper">
          <p class="criteria">RAM</p>
          <div class="bareme">
            <div
              class="number"
              v-for="i in ram"
              :key="i"
              @click="(e) => e.target.classList.toggle('number-selected')"
            >
              {{ i }}
            </div>
          </div>
          <p class="unit">GB</p>
        </div>
        <div class="wrapper">
          <p class="criteria">RAM</p>
          <div class="number-selector">
            <div class="signs">
              <p>-</p>
            </div>
            <div class="bareme">
              <div class="number">1</div>
            </div>
            <div class="signs">
              <p>+</p>
            </div>
          </div>
          <p class="unit">GB</p>
        </div>
        <div class="button">
          <router-link to="/configs/2/4/6">
            <button>Select</button>
          </router-link>
        </div>
      </div>
      <div class="article">
        <img src="../assets/emoji/dino.png" alt="" />
        <h3>How to chose</h3>
        <p>We have been nominated as the best service on the Internet 2021.</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Footer from "../components/Footer.vue";

export default Vue.extend({
  name: "Configs",
  data: function () {
    return {
      ram: [1, 2, 4, 8, 16, 32],
      cpu: [1, 2, 4, 8, 16, 32],
    };
  },
  components: {
    Footer,
  },
});
</script>
<style lang="scss" scoped>
h2 {
  margin: 50px 0px 30px 20px;
  font-size: 24px;
}
.configs-block {
  margin: 30px 20px 0px 20px;
  box-shadow: 0px 1px 25px rgba(200, 197, 197, 0.25);
  background-color: white;
  border-radius: 5px;
  width: 60%;
  padding: 30px;
  max-width: 800px;
}
.criteria {
  width: 80px;
  margin: 0;
}
.unit {
  margin: 0px 0px 0px 20px;
}
.wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.bareme {
  display: flex;
  border: 0.5px solid rgba(200, 197, 197, 0.52);
  border-radius: 5px;
  height: 40px;

  .number {
    width: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: 0.2s;
  }
  .number:hover {
    cursor: pointer;
  }
}
.number-selector {
  display: flex;
  .bareme {
    margin: 0px 10px 0px 10px;
  }
}
.signs {
  height: 38px;
  width: 30px;
  justify-content: center;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #6078ea 0%, #1a35b3 100%);
  border: 0.5px solid rgba(200, 197, 197, 0.52);
  border-radius: 5px;
  p {
    margin: 0;
    color: white;
  }
}
.number-selected {
  background: rgba(96, 120, 234, 0.2);
  border: 0.5px solid #6078ea;
}

.button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
button {
  background-color: #6078ea;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 32px 8px 32px;
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
.page-wrap {
  display: flex;
}
@media screen and (max-width: 850px) {
  .configs-block {
    order: 2;
    width: 100%;
  }
  .bareme {
    height: 30px;
    .number {
      width: 30px;
    }
  }
  .unit {
    margin: 0px 0px 0px 10px;
  }
  .signs {
    height: 30px;
  }
  .page-wrap {
    flex-wrap: wrap;
  }
  .article {
    order: 1;
    width: 100%;
    margin: 30px 0px 0px 30px;
  }
}
</style>
