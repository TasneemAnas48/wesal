<template>
    <div style="direction: ltr">
        <div class="container" style="max-width: 800px">
            <carousel :autoplay="true" :per-page="1" :mouse-drag="true" paginationActiveColor="var(--main-color)"
                paginationColor="rgba(33, 184, 230, 0.184)" :speed="3000">
                <slide>
                    <lottie-animation path="../../animations/data.json" :width="200" :height="200" />
                    <h1 class="slider-header">{{ sliders[0].header }}</h1>
                    <p class="slider-disc">{{ sliders[0].discription }}</p>
                </slide>
                <slide>
                    <lottie-animation path="../../animations/data.json" :width="200" :height="200" />
                    <h1 class="slider-header">{{ sliders[1].header }}</h1>
                    <p class="slider-disc"> {{ sliders[1].discription }}</p>
                </slide>
                <slide>
                    <lottie-animation path="../../animations/data.json" :width="200" :height="200" />
                    <h1 class="slider-header">{{ sliders[2].header }}</h1>
                    <p class="slider-disc"> {{ sliders[2].discription }}</p>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
    name: "MyCarousel",
    components: {
        LottieAnimation,
    },
    data() {
        return {
            sliders: [
                {
                    img: '',
                    header: 'الدفع النقدي بتخيّل جديد',
                    discription: 'استبدل الدفع النقدي بطرق دفع أسهل, أسرع وأكثر أماناً.. تم تطويرها لتلبي احتياجات الزبائن والأعمال'
                },
                {
                    img: '',
                    header: 'سهل الاستخدام',
                    discription: 'أنشئ الحساب الخاص بك بدقائق،ابدأ بمسح الرمز الموجود على الفاتورة وابدأ بالدفع'
                },
                {
                    img: '',
                    header: 'نظام أمان وحماية عالمي',
                    discription: 'وصال تساعدك على استبدال استخدام النقود الورقية بدفعات الكترونية لتجنّبك حمل كميات كبيرة من النقود',
                }
            ],
        };
    },
}

</script>


<style lang="scss">
@media (max-width: 700px) {
    .slider-header {
        font-size: 6vw !important;
    }

    .slider-disc {
        font-size: 3vw !important;
    }
}

@media (max-width: 992px) and (min-width: 700px) {
    .slider-header {
        font-size: 4.5vw !important;
    }

    .slider-disc {
        font-size: 2vw !important;
    }
}

.slider-header {
    color: #01244a;
    font-size: 3.5vw;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    font-weight: bold;
}

.slider-disc {
    color: var(--gray);
    font-size: 1.1vw;
}
</style>
