<template>
  <div>
    <nav>
      <Navbar />
    </nav>
    <b-container fluid class="container">
      <div class="headerBg"></div>
      <ProfilePtCardEdit />
      <div class="form-edit">
        <EditPtProfileForm class="mb-0" />
      </div>
    </b-container>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import ProfilePtCardEdit from '../_base/profilePtCardEdit'
import EditPtProfileForm from '../_base/editPtProfileForm'
import Footer from '../_base/footer'
import Navbar from '../_base/Navbar'

export default {
  name: 'profilPtEdit',
  components: {
    ProfilePtCardEdit,
    EditPtProfileForm,
    Footer,
    Navbar
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  background-color: #e5e5e5;
}
.headerBg {
  background-color: #5e50a1;
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
}

.form-edit {
  display: flex;
  flex-direction: column;
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
</style>
