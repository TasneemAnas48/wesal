<template>
  <section id="header">
    <navbar />
    <my-carousel />
    <div class="d-flex justify-content-center section-buttons-header align-items-center">
      <custom-button :buttonText="$t('header.buttonCheck')" :button1=true v-scroll-to="'#product'"/>
      <!-- <custom-button :buttonText="$t('header.buttonJoinFree')" :button2=true /> -->
    </div>
  </section>
</template>

<script>
import CustomButton from "@/components/Button.vue";
import Navbar from "@/components/Navbar.vue";
import MyCarousel from "@/components/MyCarousel.vue";

export default {
  name: "CustomHeader",
  components: {
    CustomButton,
    Navbar,
    MyCarousel,
  },
  data() {
    return {

    };
  }
};

</script>


<style lang="scss">
#header {
  background-image: url(../assets/img/header-background.png);
  background-size: cover;
}

.section-buttons-header {
  margin: 30px;
  padding: 20px;
  gap: 15px
}

@media (max-width: 500px) {
  .section-buttons-header {
    flex-direction: column;
  }
}
</style>
