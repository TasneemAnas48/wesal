<template>
    <div class="faq" id="faq">
        <div class="top" style="direction: rtl;">
            <img src="../assets/img/wave.svg" class="wave" v-scrollanimation>
        </div>
        <navbar />
        <div class="bottom">
            <div class="faq-container" v-scrollanimation>
                <div class="faq-header">
                    <h1 class="faq-title">
                        الاسئلة الشائعة
                    </h1>
                </div>
                <div class="faq-content">
                    <accordion />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue';
import Navbar from "@/components/Navbar.vue";
export default {
    name: "FAQ",
    components: {
        Accordion,
        Navbar

    },
    data() {
        return {
            dir: '',
        };
    },
    computed: {
        selectDir() {
            this.dir = localStorage.getItem('lang');
        }
    }
};
</script>
<style>
.faq .faq-header {
    z-index: 99999;
    position: relative;
}

.faq .wave {
    display: block;
    position: absolute;
    height: 515px;
    z-index: 0;
}

.faq-container {
    padding: 70px 0px;
}

.faq-title {
    margin: 0px 15px;
}

.faq-content {
    margin-top: 70px
}

@media (min-width: 1200px) {
    .faq-content {
        margin: 70px 200px;
    }
}

@media (min-width: 992px) and (max-width: 1200px) {
    .faq-content {
        margin: 70px 150px;
    }
}

@media (max-width: 575px) {
    .faq-content {
        margin: 70px 30px;
    }
}

.faq .top .before-enter {
    opacity: 0;
    transform: translateY(-160px);
    transition: all 1.5s;
}

.faq .top .enter {
    opacity: 1;
    transform: translateY(0px);
}

.faq .bottom .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1.5s;
}

.faq .bottom .enter {
    opacity: 1;
    transform: translateY(0px);
}
</style>

