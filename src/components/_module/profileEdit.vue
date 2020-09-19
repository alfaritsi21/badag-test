<template>
  <div>
    <nav>
      <Navbar />
    </nav>
    <b-container fluid class="container">
      <div class="headerBg"></div>
      <ProfileCardEdit />
      <div class="form-edit">
        <EditProfileForm class="mb-2" />
        <EditProfileFormSkill class="mb-2" />
        <EditProfileFormExperience class="mb-2" />
        <EditProfileExp class="mb-2" />
        <ProfileExpEdit class="mb-2" />
        <ProfilePortoEdit class="mb-0" />
      </div>
    </b-container>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import ProfileCardEdit from '../_base/profileCardEdit'
import EditProfileForm from '../_base/editProfileForm'
import EditProfileFormExperience from '../_base/editProfileFormExperience'
import ProfileExpEdit from '../_base/editProfileExperience(2)'
import ProfilePortoEdit from '../_base/editProfilePortofolio'
import Footer from '../_base/footer'
import Navbar from '../_base/Navbar'

export default {
  name: 'profilEdit',
  components: {
    ProfileCardEdit,
    EditProfileForm,
    EditProfileFormExperience,
    ProfileExpEdit,
    ProfilePortoEdit,
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
