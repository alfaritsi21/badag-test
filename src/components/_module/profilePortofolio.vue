<template>
  <div>
    <header>
      <Profile />
    </header>
    <nav>
      <Navbar />
    </nav>
    <b-container fluid class="container">
      <div class="headerBg"></div>
      <div class="main">
        <Cardprofile />
        <Protofoliotab />
      </div>
    </b-container>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Cardprofile from '../_base/profileCard'
import Protofoliotab from '../_base/portofolioTab'
import Footer from '../_base/footer'
import Navbar from '../_base/Navbar'
import Profile from '../_base/modalProfile'
export default {
  name: 'Portofolio',
  components: {
    Cardprofile,
    Protofoliotab,
    Footer,
    Navbar,
    Profile
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  width: 100%;
  background-color: #e5e5e5;
}
.main {
  text-align: center;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  position: relative;
}
.headerBg {
  background-color: #5e50a1;
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
}
footer {
  background-color: #5e50a1;
  width: 100%;
  height: 300px;
  position: relative;
  bottom: 0;
  left: 0;
}
nav {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
}
header {
  width: 100%;
  height: 10px;
  position: absolute;
  top: 0px;
  margin-top: 55px;
  z-index: 4;
}
</style>
