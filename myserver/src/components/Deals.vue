<template>
  <div class="deals">
    <h1>Find the best deal for you.</h1>
    <div class="cards">
      <div class="card" v-for="deal in deals" :key="deal.name">
        <div class="card-content">
          <h2 class="deal-name">
            VPS <span :class="deal.color">{{ deal.name }}</span>
          </h2>
          <div class="d-flex asset">
            <img src="../assets/emoji/check.png" alt="" />
            <p>{{ deal.ram }} GB RAM</p>
          </div>
          <div class="d-flex asset">
            <img src="../assets/emoji/check.png" alt="" />
            <p>{{ deal.cpu }} CORE</p>
          </div>
          <div class="d-flex asset">
            <img src="../assets/emoji/check.png" alt="" />
            <p>{{ deal.ssd }} SSD</p>
          </div>
          <div class="d-flex cta-deals">
            <h2>{{ deal.price }}€/m</h2>
            <button :class="deal.button" class="deal-button">
              <router-link
                :to="'/configs/' + deal.ram + '/' + deal.cpu + '/' + deal.ssd"
              >
                Chose this deal
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="customize">
      <router-link to="/configs">
        <button class="cta-customize">Customize your own</button>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Deals",
  data: function () {
    return {
      deals: [
        {
          name: "Standard",
          ram: 64,
          cpu: 2,
          os: "iOs",
          ssd: 8,
          price: 9,
          color: "blue",
          button: "blue-button",
        },
        {
          name: "Premium",
          ram: 32,
          cpu: 4,
          os: "iOs",
          ssd: 5,
          price: 12,
          color: "pink",
          button: "pink-button",
        },
        {
          name: "Premium ++",
          ram: 32,
          cpu: 8,
          os: "iOs",
          ssd: 6,
          price: 20,
          color: "gold",
          button: "gold-button",
        },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
.deals {
  background-color: #6078ea;
  padding: 15px;
  color: white;
}
p {
  margin: 0;
}
h1 {
  margin-top: 15px;
  width: 30%;
}
.cards {
  display: flex;
  color: black;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
}
.card {
  width: 30%;
  margin: 10px;
  padding: 24px;
  filter: drop-shadow(0px 1px 25px rgba(26, 53, 179, 0.5));
}
.card-content {
  img {
    height: 16px;
    width: 16px;
    margin-top: 3px;
  }
  p {
    margin-left: 10px;
  }
}
.deal-name {
  margin-bottom: 40px;
}
.deal-button {
  color: white;
  border: none;
  padding: 0px 20px 0px 20px;
  border-radius: 5px;
}
.blue-button {
  background-color: #6078ea;
}
.pink-button {
  background-color: #d3208b;
}
.gold-button {
  background-color: #fda000;
}
h2 .blue {
  color: #6078ea;
  font-weight: 100;
}
.pink {
  color: #d3208b;
  font-weight: 100;
}
.gold {
  color: #fda000;
  font-weight: 100;
}
.cta-deals {
  margin-top: 73px;
  justify-content: space-between;
}
.asset {
  margin-bottom: 20px;
}
.customize {
  width: 100%;
  display: flex;
  justify-content: end;
}
.cta-customize {
  background-color: white;
  color: #6078ea;
  margin: 40px 10px 30px 0px;
  padding: 15px 20px 15px 20px;
  border: none;
  border-radius: 5px;
}
@media screen and (max-width: 800px) {
  .card {
    width: 100%;
  }
  .cards {
    justify-content: flex-start;
  }
  h1 {
    width: 80%;
    margin-left: 10px;
  }
}
</style>
