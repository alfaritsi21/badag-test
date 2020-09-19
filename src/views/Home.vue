<template>
  <div class="home">
    <b-container>
      <header>
        <div class="home-page">
          <nav>
            <b-row>
              <b-col cols="6" md="6" sm="6">
                <img src="../assets/img/img-landing/logo.png" />
              </b-col>
              <b-col v-if="isLogin2 === false" cols="6" md="6" sm="6">
                <!-- <b-button class="btn-sigup float-right">
                  <router-link to="/auth#masuk">Daftar</router-link>
                </b-button>
                <b-button class="btn-sigin float-right">
                  <router-link to="/auth">Masuk</router-link>
                </b-button>-->
                <b-dropdown
                  id="dropdown-right"
                  right
                  text="Masuk"
                  variant="primary"
                  class="btn-sigin float-right"
                >
                  <b-dropdown-item @click="onLogin('public')">Masuk Sebagai Pekerja</b-dropdown-item>
                  <b-dropdown-item @click="onLogin('recruiter')">Masuk Sebagai Perekrut</b-dropdown-item>
                </b-dropdown>
                <b-dropdown
                  id="dropdown-right"
                  left
                  text="Daftar"
                  variant="primary"
                  class="btn-sigup float-right"
                >
                  <b-dropdown-item @click="onRegister('public')">Daftar Sebagai Pekerja</b-dropdown-item>
                  <b-dropdown-item @click="onRegister('recruiter')">Daftar Sebagai Perekrut</b-dropdown-item>
                </b-dropdown>
              </b-col>
            </b-row>
          </nav>
          <div class="main-header">
            <b-row>
              <b-col cols="12" md="6" sm="6" class="header-left">
                <h1>Talenta Terbaik Negeri Untuk Perubahan Revolusi 4.0</h1>
                <p>
                  Berbagai macam skill yang diperlukan untuk menyongsong revolusi 4.0
                  dapat dicari melalui talent yang telah terdaftar di Badag
                </p>
                <b-button class="btn-start" @click="onMulai">Mulai Dari Sekarang</b-button>
              </b-col>
              <b-col cols="12" md="6" sm="6" class="header-right">
                <div class="img-header">
                  <div class="rectangle-header"></div>
                  <img src="../assets/img/img-landing/img-header.png" alt srcset />
                  <div class="rectangle-small"></div>
                  <div class="rectangle-yellow"></div>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </header>

      <section class="why">
        <b-row>
          <b-col cols="12" md="6" sm="6">
            <div class="why-img">
              <div class="rectangle-why"></div>
              <img src="../assets/img/img-landing/why-img.png" />
              <div class="rectangle-small-why"></div>
            </div>
          </b-col>
          <b-col cols="12" md="6" sm="6">
            <h2>Kenapa Harus Mencari Talent Di Badag</h2>
            <h5>Talent di Badag telah dibekali skill :</h5>
            <p class="p">
              <b-icon class="icons" icon="check-circle-fill" style="color: #7952b3;"></b-icon>Teamwork atau Kerjasama Tim
            </p>
            <p class="p">
              <b-icon class="icons" icon="check-circle-fill" style="color: #7952b3;"></b-icon>Keterampilan menganalisis
            </p>
            <p class="p">
              <b-icon class="icons" icon="check-circle-fill" style="color: #7952b3;"></b-icon>Jiwa Kepemimpinan
            </p>
            <p class="p">
              <b-icon class="icons" icon="check-circle-fill" style="color: #7952b3;"></b-icon>Fleksibilitas dan Kemampuan Beradaptasi
            </p>
            <p class="p">
              <b-icon class="icons" icon="check-circle-fill" style="color: #7952b3;"></b-icon>Mahir menggunakan Teknologi
            </p>
          </b-col>
        </b-row>
      </section>

      <section class="skill">
        <b-row>
          <b-col cols="12" md="6" sm="6">
            <h2>Skill Talent</h2>
            <p>
              Skill dalam bahasa pemrograman yang tidak diragukan lagi kalau
              talent di Badag mempunyai beragam skill, seperti :
            </p>
            <b-row>
              <b-col cols="6" md="6" sm="6">
                <p class="p">
                  <b-icon class="icons" icon="check-circle-fill" variant="warning"></b-icon>Java
                </p>
                <p class="p">
                  <b-icon class="icons" icon="check-circle-fill" variant="warning"></b-icon>Kotlin
                </p>
                <p class="p">
                  <b-icon class="icons" icon="check-circle-fill" variant="warning"></b-icon>PHP
                </p>
                <p class="p">
                  <b-icon class="icons" icon="check-circle-fill" variant="warning"></b-icon>JavaScript
                </p>
              </b-col>
              <b-col cols="6" md="6" sm="6">
                <p class="p">
                  <b-icon class="icons" icon="check-circle-fill" variant="warning"></b-icon>Golang
                </p>
                <p class="p">
                  <b-icon class="icons" icon="check-circle-fill" variant="warning"></b-icon>C++
                </p>
                <p class="p">
                  <b-icon class="icons" icon="check-circle-fill" variant="warning"></b-icon>Ruby
                </p>
                <p class="p">
                  <b-icon class="icons" icon="check-circle-fill" variant="warning"></b-icon>10+ Bahasa lainnya
                </p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" md="6" sm="6">
            <div class="img-skill">
              <div class="rectangle-skill"></div>
              <img src="../assets/img/img-landing/skill-img.png" />
              <div class="rectangle-skill-small"></div>
            </div>
          </b-col>
        </b-row>
      </section>
    </b-container>

    <section class="opinion">
      <ContentOpinion />
    </section>
    <b-container>
      <section class="sign-now">
        <div class="banner">
          <b-row>
            <b-col cols="6" md="6" sm="6">
              <h1>Dapatkan Talent Terbaikmu</h1>
            </b-col>
            <b-col cols="6" md="6" sm="6">
              <b-button class="btn-sign-now float-right" @click="onMulai">Mulai Dari Sekarang</b-button>
            </b-col>
          </b-row>
        </div>
      </section>
    </b-container>

    <section class="footer">
      <Footer />
    </section>
  </div>
</template>

<script>
import ContentOpinion from '../components/_module/contentOpinion'
import Footer from '../components/_base/footer'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    ContentOpinion,
    Footer
  },
  computer: {},
  computed: {
    ...mapGetters(['isPt', 'isLogin2'])
  },
  methods: {
    ...mapActions(['userRole', 'userRoleRegist', 'getUser']),
    onMulai() {
      this.getUser()
      if (this.isPt === false) {
        this.$router.push('/profile-portofolio')
      } else {
        this.$router.push('/home')
      }
    },
    onLogin(val) {
      this.userRole(val)
      this.$router.push('/auth')
      alert(`Anda akan login sebagai ${val}`)
    },
    onRegister(val) {
      this.userRoleRegist(val)
      this.$router.push('/auth')
      alert(`Anda akan register sebagai ${val}`)
    }
  }
}
</script>

<style src="../assets/css/style.css"></style>
