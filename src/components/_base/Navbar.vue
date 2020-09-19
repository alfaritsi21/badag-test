<template>
  <div class="navbars">
    <b-container>
      <!-- <b-navbar toggleable="lg">
        <b-navbar-brand>
          <img src="../../assets/img/img-landing/logo.png" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto" style="font-size: 20px;">
            <div class="icons">
              <b-icon icon="bell"></b-icon>
              <b-icon icon="envelope"></b-icon>
            </div>
            <div class="img-profile">
              <img src="../../assets/img/profile-navbar.png" alt />
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>-->
      <b-row>
        <b-col cols="12" md="6" sm="6">
          <div class="logo" @click="onLogo">
            <img src="../../assets/img/img-landing/logo.png" />
          </div>
        </b-col>
        <b-col cols="12" md="6" sm="6">
          <div class="navigation">
            <div class="img-profile float-right" @click="onProfile">
              <img src="../../assets/img/profile-navbar.png" alt />
            </div>
            <div class="icons float-right">
              <b-icon icon="bell"></b-icon>
              <b-icon icon="envelope" @click="onMail" class="mail"></b-icon>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Navbar',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isPt', 'isProfileClick'])
  },
  methods: {
    ...mapActions(['profileClick']),
    onLogo() {
      this.$router.push('/')
    },
    onProfile() {
      if (this.isPt === false) {
        this.$router.push('/profile-portofolio')
      } else {
        this.$router.push('/profile-company')
      }
      if (this.isProfileClick === false) {
        this.profileClick(true)
      } else {
        this.profileClick(false)
      }
    },
    onMail() {
      if (this.isPt === false) {
        this.$router.push('/chat')
      } else {
        this.$router.push('/chat')
      }
    }
  }
}
</script>

<style scoped>
.navbars {
  position: relative;
  background: #fff;
  padding: 20px 0;
}
.navbars .icons .b-icon.bi {
  margin: 10px 20px;
  float: left;
}
.navbars .img-profile img {
  border-radius: 100%;
  margin-left: 20px;
  cursor: pointer;
}
.modal {
  width: 200px;
  height: 200px;
  background-color: orchid;
  position: relative;
  z-index: 5;
}
@media (max-width: 575.98px) {
  .navbars .logo img {
    display: none;
  }

  .navbars .navigation {
    position: fixed;
    bottom: 0px;
    background: #fff;
    z-index: 1;
    padding: 25px 125px 25px 0;
    width: 100%;
    margin-left: -15px;
    display: block;
    box-shadow: 0px -6px 20px rgba(175, 175, 175, 0.25);
    border-radius: 30px 30px 0px 0px;
  }
}
</style>
