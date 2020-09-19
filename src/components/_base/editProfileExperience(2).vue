<template>
  <div>
    <div class="skills">
      <div class="content">
        <h2 style="color:grey">Pengalaman kerja</h2>
        <hr />
        <form action>
          <b-form-group id="fieldset-1" label="Posisi" label-for="input-1">
            <b-form-input id="input-1" placeholder="web developer" v-model="name" trim class="mb-2"></b-form-input>
          </b-form-group>
          <div class="pt">
            <b-form-group id="fieldset-1" label="Nama perusahaan" label-for="input-1">
              <b-form-input
                id="input-1"
                placeholder="PT Harus bisa"
                v-model="name"
                trim
                class="mb-2"
              ></b-form-input>
            </b-form-group>
            <div>
              <label for="example-datepicker">Choose a date</label>
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </div>
          </div>
          <br />
          <b-form-group id="fieldset-1" label="Deskripsi Singkat" label-for="input-1">
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Deskripsikan pekerjaan anda"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <br />
          <hr />
          <b-button block variant="info">Tambah pengalaman kerja</b-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editProfileExp',
  data() {
    return {}
  }
}
</script>

<style scoped>
textarea {
  height: 150px;
}
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
