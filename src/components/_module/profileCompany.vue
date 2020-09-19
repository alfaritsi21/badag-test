<template>
  <div>
    <ProfilePt />
    <Navbar />
    <main>
      <b-container>
        <div class="company-latar">
          <img src="../../assets/img/luis.jpg" alt srcset />
          <p class="float-right">
            <b-icon icon="pencil-fill"></b-icon>Ubah Latar
          </p>
        </div>
        <div class="main-company text-center">
          <h3>PT Martabat Jaya Abadi</h3>
          <h6>Jobs Desc</h6>
          <p>
            <b-icon icon="map"></b-icon>Purwokerto, Jawa Tengah
          </p>
          <p
            class="description"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur temporibus maiores non mollitia ad voluptatibus ex consequuntur voluptas cum?</p>
          <b-button class="edit-company" @click="onEdit">Edit Profile</b-button>
          <div class="contact-company">
            <!-- <p>
              <img src="../../assets/img/mail.png" alt />
              martabatjaya@gmail.com
            </p>
            <p>
              <img src="../../assets/img/instagram.png" alt class="text-left" />
              martabat_jaya
            </p>-->
            <b-row>
              <b-col cols="5" md="5" sm="5">
                <img src="../../assets/img/mail.png" alt style="padding: 0 0;" />
                <img src="../../assets/img/instagram.png" alt style="padding-top: 17px;" />
                <img src="../../assets/img/phone.png" alt style="padding-top: 17px;" />
                <!-- <img src="../../assets/img/i.png" alt /> -->
                <img src="../../assets/img/in.png" alt style="padding-top: 20px;" />
              </b-col>
              <b-col cols="7" md="7" sm="7" class="text-left">
                <p>martabatjaya@gmail.com</p>
                <p>martabat_jaya</p>
                <p>0821-8190-1821</p>
                <p>Martabat Jaya Abadi</p>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../_base/Navbar'
import Footer from '../_base/footer'
import ProfilePt from '../_base/modalProfilePt'
export default {
  name: 'profileCompany',
  components: {
    Navbar,
    Footer,
    ProfilePt
  },
  methods: {
    onEdit() {
      this.$router.push('/profile-pt-edit')
    }
  }
}
</script>

<style>
main {
  padding: 100px 0;
  background: #e5e5e5;
}

main .company-latar {
  background: #5e50a1;
  border-radius: 8px 8px 0 0;
  height: 175px;
}
main .company-latar p {
  color: #fff;
  font-size: 20px;
  padding: 10px 25px;
  margin-top: 125px;
}
.b-icon.bi {
  margin-right: 5px;
  font-size: 18px;
}
main .company-latar img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 40%;
  left: 45%;
}
main .main-company {
  background: #fff;
  border-radius: 0 0 8px 8px;
  padding: 100px 0;
}
main .main-company p {
  color: #9ea0a5;
}
main .main-company .description {
  width: 600px;
  margin: 0 auto;
}
main .main-company .edit-company {
  background: #5e50a1;
  padding: 10px 100px;
  margin: 25px 0;
}
main .main-company img {
  display: block;
  margin-left: 100%;
}
main .main-company .contact-company p {
  margin-left: 10px;
}
</style>
