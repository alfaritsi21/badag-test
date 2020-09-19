<template>
  <div class="slider-opinion">
    <h2 class="text-center">Their Opinion About Badag</h2>
    <carousel :autoplay="true" :nav="false">
      <b-card
        title="Prof. Arqi Alfaritsi"
        sub-title="CEO of Foodiepie"
        img-src="https://assets.pikiran-rakyat.com/crop/0x19:1427x1139/x/photo/2020/07/02/3651512854.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center">
          Talent dari Badag memiliki kemampuan yang selalu berkembang setiap harinya.
          Kesempatan terbaik untuk mencari talent terbaik di Badag
        </b-card-text>
      </b-card>
      <b-card
        title="Dr. Arif Rahman"
        sub-title="Vice President of Macrosoft"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLkM_dC1tYro1Na55TCg-v6VWHzNrYeuAMZg&usqp=CAU"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center">
          Suatu kebanggaan saat merekrut talent dari Badag.
          Meskipun banyak talent muda, tapi sangat berbakat. Terima Kasih Badag
        </b-card-text>
      </b-card>
      <b-card
        title="Galuh Prahadi Lc"
        sub-title="Web Developer Expert"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center">
          Setiap talent yang saya rekrut tidak ada yang mengecewakan.
          Mudah dalam mengikuti cara kerja di perusahaan.
        </b-card-text>
      </b-card>
      <b-card
        title="Dimas Prayoga P.Hd"
        sub-title="Owner Microhard"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center">
          Awalnya sangat sulit mencari talent di tempat lain.
          Lewat Badag mencari talent berbakat sangat mudah dilakukan.
        </b-card-text>
      </b-card>
      <b-card
        title="Bagas Afrizal"
        sub-title="Alibibi Founder"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center">
          Tidak terpikirkan melalui Badag saya menemukan talent yang bagus,
          baik dalam skill pemrograman maupun softskill.
        </b-card-text>
      </b-card>
      <b-card
        title="Harry Styles"
        sub-title="Web Developer"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        borderra
      >
        <b-card-text class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
          dolores enim necessitatibus. Vitae, in.
        </b-card-text>
      </b-card>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'ContentOpinion',
  components: {
    carousel
  }
}
</script>

<style scoped>
.slider-opinion {
  background: #e5e5e5;
  padding: 50px;
}

.slider-opinion h2 {
  margin-bottom: 30px;
}

.owl-carousel .owl-item img {
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin: 20px auto;
}

.card-title {
  text-align: center;
}

.text-muted {
  text-align: center;
}
</style>
