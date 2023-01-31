<template>
    <main class="main">
        <about-us/>
        <services />
        <features />
        <benefite />
        <payment />
        <product />
        <contact-us />
    </main>
</template>

<script>
import AboutUs from "@/components/AboutUs.vue"
import Services from "@/components/Services.vue"
import Features from "@/components/Features.vue"
import Payment from "@/components/Payment.vue"
import ContactUs from "@/components/ContactUs.vue"
import Benefite from "@/components/Benefite.vue"
import Product from "@/components/Product.vue"

export default {
    name: "Main",
    components: {
        AboutUs,
        Services,
        Features,
        Payment,
        ContactUs,
        Benefite,
        Product
    },
    data() {
        return {
        };
    },
};
</script>

