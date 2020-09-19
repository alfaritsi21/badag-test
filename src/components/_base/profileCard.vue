<template>
  <div class="profile">
    <div class="gambar">
      <img src="../../assets/img/luis.jpg" alt class="profileImg" />
    </div>
    <h4 class="profileName">Louis Tamlinson</h4>
    <p>Web Developer</p>
    <div class="pin">
      <img src="../../assets/img/pin.png" alt />
      <p>Purwokerto, Jawa Tengah</p>
    </div>
    <p>Freelancer</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum
      atque, porro non ab nulla, magni minima quis autem odit illum dolorem
      laudantium, optio natus assumenda in veniam illo itaque.
    </p>
    <button v-if="isPt === true" type="button" @click="onBtn">Hire</button>
    <button v-if="isPt === false" type="button" @click="onBtn">Edit</button>
    <h5>Skill</h5>
    <div class="skill">
      <div v-for="(item, index) in 10" :key="index">
        <p>Python</p>
      </div>
    </div>
    <div class="email">
      <img src="../../assets/img/mail.png" alt="email" />
      <p>Louisarmstrong@gmail.com</p>
    </div>
    <div class="insta">
      <img src="../../assets/img/instagram.png" alt="insta" />
      <p>@Louisarm11</p>
    </div>
    <div class="github">
      <img src="../../assets/img/github.png" alt="github" />
      <p>@Louisarmstr</p>
    </div>
    <div class="gitlab">
      <img src="../../assets/img/gitlab.png" alt="gitlab" />
      <p>@Louisarmstrong</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProfileCard',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isPt'])
  },
  methods: {
    onBtn() {
      if (this.isPt === false) {
        this.$router.push('/profile-edit')
      } else {
        this.$router.push('/hire')
      }
    }
  }
}
</script>

<style scoped>
.profile {
  padding: 0;
  position: relative;
  width: 350px;
  border-radius: 5px;
  padding: 20px 30px;
  text-align: left;
  box-sizing: border-box;
  background-color: white;
}
.email {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: left;
  align-items: center;
}

.insta {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: left;
  align-items: center;
}

.github {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: left;
  align-items: center;
}

.gitlab {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: left;
  justify-items: center;
  align-items: center;
}
.email p {
  position: relative;
  left: 20px;
  color: #9ea0a5;
  font-size: 13px !important;
}
.insta p {
  position: relative;
  left: 20px;
  color: #9ea0a5;
  font-size: 13px !important;
}
.github p {
  position: relative;
  left: 20px;
  color: #9ea0a5;
  font-size: 13px !important;
}
.gitlab p {
  position: relative;
  left: 20px;
  color: #9ea0a5;
  font-size: 13px !important;
}
.profile h5 {
  margin-top: 10px;
  font-size: 18px;
}
.skill {
  margin: 0;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.skill div {
  height: 33px;
  margin-right: 10px;
  margin-bottom: 15px;
}
.skill p {
  margin: 0;
  height: 30px;
  border: 1px solid #e79c04;
  font-size: 10px;
  margin-right: 5px;
  padding: 3px 7px;
  color: #cf8c07;
  background-color: rgba(251, 176, 23, 0.6);
  border-radius: 5px;
}
.profile button {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 45px;
  border: 1px solid black;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  background-color: #5e50a1;
}
.profile p:nth-of-type(1) {
  font-size: 14px;
  margin: 0;
}
.profile p:nth-of-type(3) {
  font-size: 12px;
  margin-top: 8px;
  color: #9ea0a5;
  line-height: 23px;
}
.profile p:nth-of-type(2) {
  font-size: 13px;
  margin: 0;
  margin-top: 5px;
  color: #9ea0a5;
}
.pin {
  padding: 0;
  margin-top: 10px;
  margin-bottom: 5px;
  height: 30px;
  position: relative;
}
.pin p {
  right: 0;
  font-size: 12px;
  position: absolute;
  left: 23px;
  top: 3px;
  color: #9ea0a5;
}
.pin img {
  width: 15px;
  height: 15px;
  top: 7px;
  left: 0;
  position: absolute;
}
.gambar {
  text-align: center;
}
.profileImg {
  margin: 0 auto;
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.profileName {
  margin-top: 10px;
  font-size: 20px;
  position: relative;
  text-align: left;
}
</style>
