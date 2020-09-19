<template>
  <div class="container">
    <div class="leftBg">
      <div class="icon">
        <div class="imgIcon"></div>
        <p>Badag</p>
      </div>
      <h1>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
      <div class="bgImg"></div>
    </div>
    <div v-if="isReset === true" class="formHead">
      <div class="formTitel">
        <h4>Reset password</h4>
        <p>You need to change your password to activate your account.</p>
      </div>
      <form class="resetForm" @submit.prevent="onSubmitReset">
        <p>Kata sandi</p>
        <input
          v-if="isPt === false"
          type="password"
          placeholder="Masukkan kata sandi pribadi"
          v-model="formReset.user_password"
        />
        <input
          v-else
          type="password"
          placeholder="Masukkan kata sandi company"
          v-model="formResetPt.company_password"
        />
        <p>Konfirmasi kata sandi</p>
        <input
          v-if="isPt === false"
          type="password"
          placeholder="Masukkan konfirmasi kata sandi pribadi"
          v-model="formReset.re_password"
        />
        <input
          v-else
          type="password"
          placeholder="Masukkan konfirmasi kata sandi company"
          v-model="formResetPt.re_password"
        />
        <br />
        <button type="submit">Reset password</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Reset',
  data() {
    return {
      isReset: true,
      formReset: {
        user_password: '',
        re_password: ''
      },
      formResetPt: {
        company_password: '',
        re_password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['isPt'])
  },
  methods: {
    ...mapActions(['forgot', 'forgotPt']),
    onSubmitReset() {
      if (this.isPt === false) {
        alert('reset sebagai worker')
        this.forgot(this.formReset)
          .then((result) => {
            alert(result.msg)
            this.$router.push('/')
          })
          .catch((error) => {
            alert(error)
          })
      } else {
        alert('reset sebagai company')
        this.forgotPt(this.formResetPt)
          .then((result) => {
            alert(result.msg)
            this.$router.push('/')
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  width: 1280px;
  height: 688px;
  display: flex;
  position: relative;
  box-sizing: border-box;
}
.formHead {
  position: relative;
  width: 100%;
  left: 55px;
  padding-top: 60px;
}
.formTitel {
  height: 150px;
  position: relative;
}
.formTitel h4 {
  margin-bottom: 15px;
  font-size: 27px;
}
.formTitel p:nth-of-type(1) {
  font-size: 15px;
}

.resetForm {
  width: 100%;
  position: relative;
  top: -10px;
}
.resetForm p:nth-of-type(1) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.resetForm input:nth-of-type(1) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 20px;
}
.resetForm p:nth-of-type(2) {
  position: relative;
  color: #9ea0a5;
  font-size: 14px;
  padding-left: 10px;
  margin-bottom: 1px;
}
.resetForm input:nth-of-type(2) {
  border: 1px solid #9ea0a5;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 30px;
}
.resetForm button:nth-of-type(1) {
  width: 100%;
  height: 45px;
  border-radius: 3px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #fbb017;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
}
.icon {
  position: relative;
  width: 95px;
  height: 35px;
  z-index: 2;
  top: 30px;
  left: 20px;
  box-sizing: border-box;
}
.imgIcon {
  width: 40px;
  height: 100%;
  position: absolute;
  left: 0;
  background-image: url(../../assets/img/layers.png);
  background-size: cover;
  background-repeat: round;
}
.icon p {
  position: absolute;
  right: 0;
  top: 7px;
  color: rgb(240, 240, 240);
}
.leftBg {
  position: relative;
  width: 1180px;
  margin-right: 15px;
  background-image: url(../../assets/img/agent.png);
  background-size: cover;
  background-repeat: round;
  box-sizing: border-box;
}
.leftBg h1 {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  position: relative;
  width: 400px;
  font-size: 38px;
  top: 30%;
  margin: auto;
  font-weight: bolder;
  line-height: 60px;
  z-index: 1;
  right: 20px;
}
.bgImg {
  position: absolute;
  background-image: url(../../assets/img/Group.png);
  background-size: cover;
  background-repeat: round;
  opacity: 0.8;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
<style scoped src="../../assets/css/forgot.css">
</style>
