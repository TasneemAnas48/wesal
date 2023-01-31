<template>
    <section id="service" class="service">
        <div>
            <div class="service-header">
                <h2 class="main-title-service">
                    {{ $t('service.headerTitle') }}
                </h2>
            </div>
            <div class="container main" :class="[isAr ? 'right' : 'left']" v-scrollanimation>
                <b-card no-body>
                    <b-tabs vertical>
                        <b-tab title="خدمة تحويل الرصيد" active>
                            <div class="service-tap-content">
                                <div class="service-discription">
                                    <h5 class="service-discription-header">
                                        عن الخدمة
                                    </h5>
                                    <p class="service-discription-paragraph">
                                        نقدم خدمة إرسال رصيد فوري وآلي من جميع أنحاء العالم إلى سوريا خلال ثانيتين
                                    </p>
                                </div>
                                <div class="service-mechanism">
                                    <h5 class="service-mechanism-header">
                                        آلية عمل الخدمة
                                    </h5>
                                    <p class="service-mechanism-paragraph">
                                        تحتاج إلى إدخال مجموعة من البيانات الضرورية لإتمام عملية تحويل الرصيد
                                    </p>
                                    <div class="service-mechanism-steps">
                                        <div class="service-step">
                                            <span class="service-content-item-number">
                                                01
                                            </span>
                                            <div class="service-step-discription">
                                                رقم المستفيد
                                            </div>
                                        </div>
                                        <div class="service-step">
                                            <span class="service-content-item-number">
                                                02
                                            </span>
                                            <div class="service-step-discription">
                                                نوع العملة التي ستدفع بها
                                            </div>
                                        </div>
                                        <div class="service-step">
                                            <span class="service-content-item-number">
                                                03
                                            </span>
                                            <div class="service-step-discription">
                                                اختيار فئة الوحدات وتبدأ من 4000 حتى 50000 وحدة
                                            </div>
                                        </div>
                                        <div class="service-step">
                                            <span class="service-content-item-number">
                                                04
                                            </span>
                                            <div class="service-step-discription">
                                                اختيار نوع الخط فاتورة أم وحدات
                                            </div>
                                        </div>
                                        <div class="service-step">
                                            <span class="service-content-item-number">
                                                05
                                            </span>
                                            <div class="service-step-discription">
                                                اختيار طريقة الدفع
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="خدمة تسديد رسوم جواز السفر">
                            <div class="service-tap-content">
                                <div class="service-discription">
                                    <h5 class="service-discription-header">
                                        عن الخدمة
                                    </h5>
                                    <p class="service-discription-paragraph">
                                        تتيح لك منصة وصال إمكانية تسديد رسوم جواز السفر لأي شخص في سوريا، وتسديد رسوم
                                        تجديد جواز سفرك، مع إمكانية اختيار إرسال رسالة نصية تعلم الشخص المستفيد بتسديد
                                        الرسوم من قبلك.
                                    </p>
                                </div>
                                <div class="service-mechanism">
                                    <h5 class="service-mechanism-header">
                                        آلية عمل الخدمة
                                    </h5>
                                    <p class="service-mechanism-paragraph">
                                        إدخال رقم المعاملة/ نوع العملة التي ستدفع بها/ إدخال رقم المستفيد.
                                    </p>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="خدمة تسديد رسوم الجامعة الافتراضية">
                            <div class="service-tap-content">
                                <div class="service-discription">
                                    <h5 class="service-discription-header">
                                        عن الخدمة
                                    </h5>
                                    <p class="service-discription-paragraph">
                                        تتيح لك وصال تسديد رسوم الجامعة الافتراضية لأي شخص سوري يدرس في الجامعة
                                        الافتراضية داخل سوريا أو خارجها، مع إمكانية اختيار إرسال رسالة نصية تعلم الشخص
                                        المستفيد بتسديد الرسوم من قبلك.
                                    </p>
                                </div>
                                <div class="service-mechanism">
                                    <h5 class="service-mechanism-header">
                                        آلية عمل الخدمة
                                    </h5>
                                    <p class="service-mechanism-paragraph">
                                        إدخال الرقم الوطني/ رقم الطالب / نوع العملة التي ستدفع بها/ إدخال رقم المستفيد.
                                    </p>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="خدمة الاستعلام وتسديد الفواتير المنزلية">
                            <div class="service-tap-content">
                                <div class="service-discription">
                                    <h5 class="service-discription-header">
                                        عن الخدمة
                                    </h5>
                                    <p class="service-discription-paragraph">
                                        يمكنك عبر منصة وصال الاستعلام، وتسديد جميع الفواتير المنزلية لأي شخص داخل سوريا
                                        خلال ثواني، مع إمكانية اختيار إرسال رسالة نصية تعلم الشخص المستفيد بتسديد
                                        الفاتورة من قبلك.
                                    </p>
                                </div>
                                <div class="service-invoices">
                                    <div v-b-toggle.electricity>
                                        <div class="row">
                                            <b-icon icon="chevron-left" aria-hidden="true" v-if="isAr"></b-icon>
                                            <b-icon icon="chevron-right" aria-hidden="true" v-else></b-icon>
                                            <p class="service-invoice-tab-header">تسديد فاتورة الكهرباء</p>
                                        </div>
                                    </div>
                                    <b-collapse id="electricity">
                                        <div class="service-tap-content-invoice">
                                            <div class="service-mechanism">
                                                <h5 class="service-mechanism-header-invoice">
                                                    آلية عمل الخدمة
                                                </h5>
                                                <p class="service-mechanism-paragraph-invoice">
                                                    من خلال إدخال مجموعة من البيانات الضرورية لإتمام عملية الدفع. </p>
                                                <div class="service-mechanism-steps">
                                                    <div class="service-step">
                                                        <span class="service-content-item-number">
                                                            01
                                                        </span>
                                                        <div class="service-step-discription">
                                                            اختبار اسم المحافظة
                                                        </div>
                                                    </div>
                                                    <div class="service-step">
                                                        <span class="service-content-item-number">
                                                            02
                                                        </span>
                                                        <div class="service-step-discription">
                                                            رقم الفاتورة
                                                        </div>
                                                    </div>
                                                    <div class="service-step">
                                                        <span class="service-content-item-number">
                                                            03
                                                        </span>
                                                        <div class="service-step-discription">
                                                            رقم الاشتراك
                                                        </div>
                                                    </div>
                                                    <div class="service-step">
                                                        <span class="service-content-item-number">
                                                            04
                                                        </span>
                                                        <div class="service-step-discription">
                                                            نوع العملة التي ستدفع بها
                                                        </div>
                                                    </div>
                                                    <div class="service-step">
                                                        <span class="service-content-item-number">
                                                            05
                                                        </span>
                                                        <div class="service-step-discription">
                                                            إدخال رقم المستفيد من الخدمة
                                                        </div>
                                                    </div>
                                                    <div class="service-step">
                                                        <span class="service-content-item-number">
                                                            06
                                                        </span>
                                                        <div class="service-step-discription">
                                                            اختيار طريقة الدفع
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-collapse>
                                    <div v-b-toggle.water>
                                        <div class="row">
                                            <b-icon icon="chevron-left" aria-hidden="true" v-if="isAr"></b-icon>
                                            <b-icon icon="chevron-right" aria-hidden="true" v-else></b-icon>
                                            <p class="service-invoice-tab-header">تسديد فاتورة المياه</p>
                                        </div>
                                    </div>
                                    <div v-b-toggle.phone>
                                        <div class="row">
                                            <b-icon icon="chevron-left" aria-hidden="true" v-if="isAr"></b-icon>
                                            <b-icon icon="chevron-right" aria-hidden="true" v-else></b-icon>
                                            <p class="service-invoice-tab-header">تسديد فاتورة الهاتف</p>
                                        </div>
                                    </div>
                                    <div v-b-toggle.internet>
                                        <div class="row">
                                            <b-icon icon="chevron-left" aria-hidden="true" v-if="isAr"></b-icon>
                                            <b-icon icon="chevron-right" aria-hidden="true" v-else></b-icon>
                                            <p class="service-invoice-tab-header">تسديد فاتورة الانترنت</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="خدمة إرسال رسالة نصية">
                            <div class="service-tap-content">
                                <div class="service-discription">
                                    <h5 class="service-discription-header">
                                        عن الخدمة
                                    </h5>
                                    <p class="service-discription-paragraph">
                                        أتاحت المنصة إمكانية اختيار إرسال رسالة نصية تتضمن أسمك مع كل خدمة تحويل رصيد،
                                        وتم تصنيفها بحسب الشخص المقدم له الخدمة فتحمل عبارات جميلة للأم، والأب،
                                        والمرتبطين، والأخوة، والأصدقاء.
                                    </p>
                                </div>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Services",
    components: {
    },
    data() {
        return {
        };
    },
    computed: {
        isAr() {
            this.lang = localStorage.getItem("lang")
            return this.lang == 'ar'
        }
    }
};
</script>


<style lang="scss">
#service {
    background-image: url(../assets/img/header-background.png);
    background-size: cover;
    padding: 50px 0px;
}

.service .main-title-service {
    font-weight: bold;
    font-size: 40px;
}

.service .ar {
    direction: rtl !important;
}

.service .card {
    border: none;
    background-color: #fff;
    box-shadow: 0px 14px 25px rgb(24 37 56 / 12%);
    margin-top: 50px;
    border-radius: 16px;
}

.service .card-body {
    padding: 0px;
}

.service .nav-tabs {
    padding: 0px;
    border: 0px;
}

// main
.service .main .nav-link {
    border-radius: 0px !important;
    border-top: none !important;
    border-bottom: none !important;
    text-align: center;
    font-weight: lighter;
    color: #727788;
    cursor: pointer;
    transition: all .4s;
    padding: 30px 20px;
    text-align: justify;
}

.service .main .nav-link.active {
    font-weight: bold;
    border-top: none;
    border-bottom: none;
    color: var(--main-color) !important;
}

.service .main .nav-tabs .nav-link:hover {
    border-color: transparent;
}

.service .main .nav-tabs .nav-link.active:hover {
    border-top: none;
    border-bottom: none;
}

// right
.service .right .nav-link {
    border-left: none !important;
    border-right: transparent;
}

.service .right .nav-link.active {
    border-left: none;
    border-right: 3px solid var(--main-color) !important;
}

.service .right .nav-tabs .nav-link.active:hover {
    border-left: none;
    border-right: 3px solid var(--main-color);
}

// left
.service .left .nav-link {
    border-right: none !important;
    border-left: transparent;
}

.service .left .nav-link.active {
    border-right: none;
    border-left: 3px solid var(--main-color) !important;
}

.service .left .nav-tabs .nav-link.active:hover {
    border-right: none;
    border-left: 3px solid var(--main-color);
}

////

.service .service-tap-content {
    display: flex;
    flex-direction: column;
    padding: 30px 65px;
    text-align: justify;
}

.service .service-discription-header,
.service .service-mechanism-header {
    font-weight: bold;
    margin: 20px 0px;
}

.service .service-discription-paragraph,
.service .service-mechanism-paragraph {
    color: var(--gray);
}



.service .service-content-container-right-list {
    padding: 0px;
    list-style: none;
    color: #727788;
    margin-top: 30px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    gap: 20px;
}

.service .service-content-item {
    display: flex;
    align-items: center;
    grid-gap: 20px;
    gap: 20px;
}

.service .service-content-item-number {
    background-color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: #fff;
    padding: 15px;
    font-size: 13px;
}

@media (max-width: 992px) {
    .service .nav-tabs {
        flex-direction: row !important;
        flex-flow: column;
        font-size: 15px;
    }
}

.service .tab-pane {
    transition: all 1.5s;
}

.service .before-enter {
    opacity: 0;
    transform: translate(0) scale(0.8);
    transition: all 1.5s ease-out;
}

.service .enter {
    opacity: 1;
    transform: translate(0) scale(1);
}

.service .service-mechanism-steps {
    display: grid;
    // grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 50px;
    -moz-column-gap: 4.6428rem;
    column-gap: 50px;
    grid-row-gap: 50px;
    row-gap: 50px;
    padding: 40px 0px;
}

@media (min-width: 992px) {
    .service .service-mechanism-steps {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 991px) {
    .service .service-mechanism-steps {
        grid-template-columns: repeat(1, 1fr);
    }
}

.service .service-step {
    display: flex;
    align-items: center;
    flex-direction: column;
    grid-gap: 8px;
    gap: 8px;
    text-align: center;
}

.service .service-step-discription {
    color: var(--gray);
    font-size: 12px;
}

.service .bi-chevron-right,
.service .bi-chevron-left {
    color: var(--main-color);
    margin-top: 6px;

}

.service .bi-chevron-left {
    margin-left: 15px;
}

.service .bi-chevron-right {
    margin-right: 15px;
}

.service .collapsed {

    .bi-chevron-right,
    .bi-chevron-left {
        transform: rotate(0);
        transition: all 0.4s;
    }


}

.service .not-collapsed {
    .bi-chevron-right {
        transform: rotate(90deg);
        transition: all 0.4s;
    }

    .bi-chevron-left {
        transform: rotate(-90deg);
        transition: all 0.4s;
    }

    .service-invoice-tab-header {
        color: var(--main-color);
        font-weight: bold;
    }
}

.service .service-invoices {
    margin-top: 20px
}

.service .service-tap-content-invoice {
    padding: 10px 25px;
}

.service .service-mechanism-header-invoice {
    font-size: 15px;
}

.service .service-mechanism-paragraph-invoice {
    font-size: 13px;
    color: var(--gray)
}
</style>