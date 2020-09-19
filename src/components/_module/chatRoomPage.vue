<template>
  <div>
    <nav>
      <Navbar />
    </nav>
    <main class="container">
      <Chatroom />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Chatroom from '../_base/chatRoom'
import Footer from '../_base/footer'
import Navbar from '../_base/Navbar'

export default {
  name: 'chatRoom',
  components: {
    Chatroom,
    Footer,
    Navbar
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
  position: relative;
  background-color: #ffffff;
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
  box-shadow: 2px 5px 30px rgba(70, 70, 70, 0.37);
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 3;
}
</style>
