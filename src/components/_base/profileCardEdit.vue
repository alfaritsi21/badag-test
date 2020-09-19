<template>
  <div class="profile">
    <div class="gambar">
      <img src="../../assets/img/luis.jpg" alt class="profileImg" />
    </div>
    <div class="gambar">
      <p class="h4 mb-2" style="color:grey">
        <b-icon icon="pencil" class="mr-2"></b-icon>Edit
      </p>
    </div>
    <h4 class="profileName">Louis Tamlinson</h4>
    <p>Web Developer</p>
    <div class="pin">
      <img src="../../assets/img/pin.png" alt />
      <p>Purwokerto, Jawa Tengah</p>
    </div>
    <p>Freelancer</p>
    <div>
      <b-button block class="prime-button">Simpan</b-button>
      <b-button block class="cancel-button">Batal</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCardEdit',
  data() {
    return {}
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
  background-color: rgb(255, 255, 255);
}
.email {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: left;
  align-items: center;
}

.profile h5 {
  margin-top: 10px;
  font-size: 18px;
}

.prime-button {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: 45px;
  border: 1px solid black;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  background-color: #5e50a1;
}

.cancel-button {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: 45px;
  border: 1px solid #5e50a1;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
  color: #5e50a1;
  background-color: white;
  /* background-color: #5e50a1; */
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
