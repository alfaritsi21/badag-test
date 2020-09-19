<template>
  <div>
    <div class="chatRoom">
      <div class="list">
        <h5>Chat</h5>
        <hr />
        <div v-if="msgCount > 0">
          <div class="sender" v-for="(item, index) in 5" :key="index">
            <img @click="onMsg" src="../../assets/img/propict.png" alt />
            <div class="isi">
              <h6>Jonas adam ada madfaw adsa</h6>
              <p>Permisi kak, mau tanya...</p>
            </div>
          </div>
        </div>
        <div v-else class="noChat">
          <img src="../../assets/img/undraw.png" alt />
          <p>Belum ada chat</p>
        </div>
      </div>
      <div class="room">
        <div v-if="msgClick === true" class="profile">
          <img src="../../assets/img/propict.png" alt="#" />
          <h4>Jonas adam</h4>
        </div>
        <div v-if="msgClick === true" class="chat">
          <div class="msgRow" v-for="(item, index) in 11" :key="index">
            <div
              class="msg"
              :style="[index %2 ? {justifyContent: 'flex-Start'} : {justifyContent: 'flex-End'}]"
            >
              <p
                :style="[index %2 ? { textAlign: 'right'} : { textAlign: 'left'}]"
              >Permisi kak, mau tanya kalo gini kalo gini kalo gini jadi kalo gitu bagaimana kak?</p>
            </div>
          </div>
        </div>
        <div v-else class="noChat2">
          <img src="../../assets/img/undraw.png" alt />
          <p>Pilih chat yang ingin dilihat</p>
        </div>
        <div class="type">
          <input
            :disabled="msgClick === false"
            type="text"
            placeholder="ketik pesan..."
            v-model="message"
          />
          <div v-if="msgClick === true" class="sendImg" @click="onSend">
            <img src="../../assets/img/send.png" alt />
          </div>
          <div v-else class="sendImg">
            <img src="../../assets/img/send.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="window" @click="onWindow"></div>
  </div>
</template>

<script>
export default {
  name: 'Chatroom',
  data() {
    return {
      message: '',
      msgCount: 1,
      msgClick: true
    }
  },
  methods: {
    onSend() {
      alert('send msg')
    },
    onMsg() {
      this.msgClick = true
    },
    onWindow() {
      this.msgClick = false
    }
  }
}
</script>

<style scoped src="../../assets/css/chat.css">
</style>
