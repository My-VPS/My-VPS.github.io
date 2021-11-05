<template>
  <div class="configs">
    <h2>1. Chose your configurations</h2>
    <div class="page-wrap">
      <div class="configs-block">
        <div class="wrapper">
          <p class="criteria">CPU</p>
          <div class="bareme">
            <div
              class="number"
              v-for="i in ram"
              :key="i"
              @click="selectCpu(i)"
              :class="i == selectedCpu ? 'number-selected' : ''"
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
              @click="selectRam(i)"
              :class="i == selectedRam ? 'number-selected' : ''"
            >
              {{ i }}
            </div>
          </div>
          <p class="unit">GB</p>
        </div>
        <div class="wrapper">
          <p class="criteria">SSD</p>
          <div class="number-selector">
            <div class="signs" @click="changeSSD('minus')">
              <p>-</p>
            </div>
            <div class="bareme">
              <div class="number">{{ selectedSSD }}</div>
            </div>
            <div class="signs" @click="changeSSD('plus')">
              <p>+</p>
            </div>
          </div>
          <p class="unit">GB</p>
        </div>
        <div class="button" :class="{ disabled: checkValid }">
          <router-link
            :to="
              '/configs/' + selectedCpu + '/' + selectedRam + '/' + selectedSSD
            "
          >
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
    <p class="warn" v-if="checkValid">Select enough RAM and SSD for your VPS</p>
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
      selectedRam: null,
      selectedCpu: null,
      selectedSSD: 1,
      maxSSD: 12,
      valid: false,
      checkRam: false,
      checkSsd: false,
    };
  },
  components: {
    Footer,
  },
  computed: {
    checkValid() {
      if (this.selectedCpu && this.selectedRam && this.selectedSSD) {
        if (this.selectedCpu > this.selectedRam) {
          if (this.selectedSSD > this.selectedRam / 2) {
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
  },
  methods: {
    changeSSD(sign) {
      if (sign == "plus") {
        if (this.selectedSSD < this.maxSSD) {
          this.selectedSSD++;
        }
      } else {
        if (this.selectedSSD > 0) {
          this.selectedSSD--;
        }
      }
    },
    selectRam(selected) {
      this.selectedRam = selected;
    },
    selectCpu(selected) {
      this.selectedCpu = selected;
    },
  },
});
</script>
<style lang="scss" scoped>
h2 {
  margin: 50px 0px 30px 20px;
  font-size: 24px;
}
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
.configs-block {
  margin: 30px 20px 0px 20px;
  box-shadow: 0px 1px 25px rgba(200, 197, 197, 0.25);
  background-color: white;
  border-radius: 5px;
  width: 60%;
  padding: 30px;
  max-width: 800px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;
}
.warn {
  margin: 20px 0px 0px 20px;
  font-size: 12px;
  font-style: italic;
  color: #d3208b;
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
    /* Safari */
  }
}
.signs:hover {
  cursor: pointer;
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
