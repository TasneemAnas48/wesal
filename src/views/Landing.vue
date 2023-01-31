<template>
  <div class="landing">
    <custom-header />
    <custom-main />
    <custom-footer />
    <scroll />
  </div>
</template>

<script>
import CustomMain from "@/components/Main.vue"
import CustomHeader from "@/components/Header.vue"
import AboutUs from "@/components/AboutUs.vue"
import Services from "@/components/Services.vue"
import Features from "@/components/Features.vue"
import Payment from "@/components/Payment.vue"
import ContactUs from "@/components/ContactUs.vue"
import CustomFooter from "@/components/Footer.vue"
import Benefite from "@/components/Benefite.vue"
import Scroll from "@/components/Scroll.vue"
import Product from "@/components/Product.vue"

export default {
  name: "Landing",
  components: {
    CustomMain,
    CustomHeader,
    AboutUs,
    Services,
    Features,
    Payment,
    ContactUs,
    CustomFooter,
    Benefite,
    Scroll,
    Product
  },
  data() {
    return {
    };
  },
  computed: {
  }
};
</script>