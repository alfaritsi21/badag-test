<template>
  <div>
    <div class="profile">
      <div class="content">
        <h2 style="color:grey">Data Diri</h2>
        <hr />
        <b-form-group id="fieldset-1" label="Nama Lengkap" label-for="input-1">
          <b-form-input
            id="input-1"
            placeholder="Masukkan Nama Lengkap"
            v-model="name"
            trim
            class="mb-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Job Desk" label-for="input-1">
          <b-form-input
            id="input-1"
            placeholder="Masukkan Job Desk"
            v-model="name"
            trim
            class="mb-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Domisili" label-for="input-1">
          <b-form-input
            id="input-1"
            placeholder="Masukkan Domisili"
            v-model="name"
            trim
            class="mb-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Tempat Kerja" label-for="input-1">
          <b-form-input
            id="input-1"
            placeholder="Masukkan Tempat Kerja"
            v-model="name"
            trim
            class="mb-2"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-1" label="Deskripsi Singkat" label-for="input-1">
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Tuliskan Deskripsi Singkat"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editProfileForm',
  data() {
    return {}
  }
}
</script>

<style scoped>
.expLoop {
  margin: 0;
  height: 175px;
  width: 100%;
  padding: 0;
  position: relative;
  border-radius: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
}
.imgJob {
  width: 63px;
  height: 65px;
  border-radius: 5px;
  background-image: url(../../assets/img/tokopedia.jpg);
  background-repeat: round;
  background-size: cover;
  margin-right: 30px;
  position: relative;
}
.jobDesc {
  width: 86%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}
.jobDesc p:nth-of-type(1) {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}
.jobDesc p:nth-of-type(2) {
  font-size: 17px;
  margin: 0;
}
.jobDesc p:nth-of-type(3) {
  font-size: 16px;
  color: #9ea0a5;
  margin: 0;
}
.jobDesc p:nth-of-type(4) {
  font-size: 16px;
  margin: 15px 0 0 0;
}
.profile {
  margin-left: 30px;
  padding: 0;
  position: relative;
  width: 730px;
  border-radius: 5px;
  padding: 20px 30px;
  text-align: left;
  background-color: white;
}
.title {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
}
.title h3:nth-of-type(1) {
  padding: 0;
  margin: 0;
  position: relative;
  font-size: 20px;
  border-bottom: 4px solid #5d50a100;
  padding-bottom: 10px;
  margin-right: 30px;
  color: #9ea0a5;
  cursor: pointer;
}
.title h3:nth-of-type(2) {
  padding: 0;
  margin: 0;
  position: relative;
  font-size: 20px;
  border-bottom: 4px solid #5d50a100;
  padding-bottom: 10px;
  margin-right: 30px;
  color: #9ea0a5;
  cursor: pointer;
}
.title h3:nth-of-type(1):hover {
  color: black;
  border-bottom: 4px solid #5e50a1;
}
.title h3:nth-of-type(2):hover {
  color: black;
  border-bottom: 4px solid #5e50a1;
}

.content {
  position: relative;
}
.portofolio {
  margin: 0;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
}
.loopBorder {
  margin: 0;
  height: 155px;
  width: 210px;
  padding: 0;
  position: relative;
  border-radius: 5px;
  margin-bottom: 30px;
}
.imgPorto {
  width: 100%;
  height: 130px;
  border-radius: 5px;
  background-image: url(../../assets/img/porto.jpg);
  background-repeat: round;
  background-size: cover;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.37);
}
.portofolio p {
  top: 5px;
  text-align: center;
  margin: 0 auto;
  position: relative;
  font-size: 13px;
  color: #000000;
}

textarea {
  height: 150px;
}
</style>
