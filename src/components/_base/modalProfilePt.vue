<template>
  <div v-if="isProfileClick === true" class="blok">
    <div class="logoutBtn">
      <button type="button" @click="onLogout">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProfilePt',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isProfileClick'])
  },
  methods: {
    ...mapActions(['logout']),
    onLogout() {
      this.logout()
    }
  }
}
</script>

<style scoped>
.logoutBtn {
  bottom: 1px solid black;
  width: 100%;
  height: 30px;
  position: absolute;
  text-align: center;
  bottom: 0;
  margin-bottom: 10px;
}
.logoutBtn button {
  position: relative;
  border: 1px solid black;
  background-color: #5e50a1;
  color: white;
  margin: 0 auto;
  width: 100px;
  border-radius: 10px;
}
.blok {
  position: absolute;
  background: #fff;
  width: 200px;
  height: 200px;
  right: 0;
  border: 1px solid black;
  border-radius: 5px;
  z-index: 4;
  margin-right: 10px;
  top: 60px;
}

@media (max-width: 575.98px) {
}
</style>
