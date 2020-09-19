<template>
  <div>
    <div class="profile">
      <div class="content">
        <h2 style="color:grey">Skill</h2>
        <hr />
        <b-input-group>
          <b-form-input></b-form-input>

          <template v-slot:append>
            <b-button class="skill-button">Simpan</b-button>
          </template>
        </b-input-group>
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
textarea {
  height: 150px;
}
.skill-button {
  background-color: #fbb017;
}
</style>
