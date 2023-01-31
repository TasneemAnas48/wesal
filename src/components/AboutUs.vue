<template>
    <section id="About-us" class="about">
        <div class="about-header">
            <h2 class="main-title-about">
                {{ $t('about.headerTitle') }}
            </h2>
        </div>

        <about-one :note="$t('about.whatIsWesal.note')" :contentTitle="$t('about.whatIsWesal.contentTitle')"
            :items="$t('about.whatIsWesal.items')" />

        <about-two :note="$t('about.misson.note')" :contentTitle="$t('about.misson.contentTitle')"
            :items="$t('about.misson.items')" />

        <about-one :note="$t('about.values.note')" :contentTitle="$t('about.values.contentTitle')"
            :items="$t('about.values.items')" />

        <about-two :note="$t('about.vision.note')" :contentTitle="$t('about.vision.contentTitle')"
            :items="$t('about.vision.items')" />
    </section>
</template>

<script>
import AboutOne from "@/components/AboutOne.vue";
import AboutTwo from "@/components/AboutTwo.vue";
export default {
    name: "AboutUs",
    components: {
        AboutOne,
        AboutTwo

    },
    data() {
        return {

        };
    }
};
</script>


<style lang="scss">
.about {
    padding-top: 50px
}

.about .main-title-about {
    font-weight: bold;
}

@media (min-width: 992px) {
    .about .main-title-about {
        font-size: 40px;
    }
}

@media (max-width: 992px) {
    .about .main-title-about {
        font-size: 35px;
    }
}

</style>
