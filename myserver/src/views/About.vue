<template>
  <div class="about">
    <h1>Meet the team 🚀</h1>
    <div class="wrapper">
      <div class="profile-wrapper">
        <div>
          <a href="https://lea-buende.com/#/" target="_blank">
            <img src="../assets/lea.png" alt="" />
          </a>
          <h3>Léa Buendé</h3>
          <p>Designer & Developer</p>
        </div>
        <div>
          <a href="https://ducki.dev/" target="_blank">
            <img src="../assets/duc.png" alt="" />
          </a>
          <h3>Duc-Thomas Nguyen</h3>
          <p>Developer</p>
        </div>
        <div>
          <a href="mailto:lea.buende@gmail.com">
            <img src="../assets/plus.png" alt="" />
          </a>
          <h3>Join the team !</h3>
        </div>
      </div>
      <div class="article">
        <img src="../assets/emoji/face.png" alt="" />
        <h3>About us</h3>
        <p>We have been nominated as the best service on the Internet 2021.</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "About",
});
</script>
<style lang="scss" scoped>
.about {
  padding: 25px;
}
h1 {
  margin: 100px 0px 25px 15px;
  font-size: 48px;
}
.profile-wrapper {
  display: flex;
  flex-wrap: wrap;
  div {
    margin-left: 15px;
  }
  img {
    height: 400px;
    box-shadow: 0px 1px 25px rgba(200, 197, 197, 0.25);
    border-radius: 5px;
    transition: 0.5s;
  }
  h3 {
    font-size: 18px;
    margin: 20px 0px 0px 0px;
  }
  p {
    font-size: 16px;
  }
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
.article {
  width: 300px;
  margin-left: 60px;
  img {
    margin-bottom: 15px;
  }
  h3 {
    margin-bottom: 15px;
  }
}
.profile-wrapper img:hover {
  box-shadow: 0px 16px 25px #c8c5c5;
  transform: translateY(-10px);
}
@media screen and (max-width: 1400px) {
  h1 {
    font-size: 32px;
  }
  .article {
    order: 1;
    margin-left: 15px;
  }
  .profile-wrapper {
    order: 2;
  }
}
</style>
