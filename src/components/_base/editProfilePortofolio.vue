<template>
  <div>
    <div class="skills">
      <div class="content">
        <h2 style="color:grey">Portofolio</h2>
        <hr />
        <form action>
          <b-form-group id="fieldset-1" label="Nama aplikasi" label-for="input-1">
            <b-form-input
              id="input-1"
              placeholder="Masukkan nama aplikasi"
              v-model="name"
              trim
              class="mb-2"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Type portofolio">
            <b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">
              <b-form-radio value="first">Aplikasi mobile</b-form-radio>
              <b-form-radio value="second">Aplikasi web</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <div class="mt-3">Upload gambar: {{ file1 ? file1.name : '' }}</div>
          <b-form-file
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <br />
          <hr />
          <b-button block variant="info">Tambah portofolio</b-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editProfileExp',
  data() {
    return {
      selected: '',
      file1: null
    }
  }
}
</script>

<style scoped>
.skills {
  margin-left: 30px;
  padding: 0;
  position: relative;
  width: 730px;
  border-radius: 5px;
  padding: 20px 30px;
  text-align: left;
  background-color: white;
}

.content {
  position: relative;
}
</style>
