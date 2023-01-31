<template>
    <section id="product" class="product">
        <div class="product-container">
            <h3 class="product-title">
                منتجاتنا
            </h3>
            <div class="product-content">
                <b-tabs content-class="mt-3" justified>
                    <b-tab title="المنتج الاول" active>
                        <div class="product-content-container" v-scrollanimation>
                            <div class="product-content-container-right">
                                <h6 class="product-content-container-right-title">
                                    الفوائد
                                </h6>
                                <ul class="product-content-container-right-list">
                                    <li class="product-content-item">
                                        <span class="product-content-item-number">
                                            01
                                        </span>
                                        أرشيف كامل لكل عمليات الدفع
                                    </li>
                                    <li class="product-content-item">
                                        <span class="product-content-item-number">
                                            02
                                        </span>
                                        أرشيف كامل لكل عمليات الدفع
                                    </li>
                                    <li class="product-content-item">
                                        <span class="product-content-item-number">
                                            03
                                        </span>
                                        أرشيف كامل لكل عمليات الدفع
                                    </li>
                                </ul>
                            </div>
                            <div class="product-content-container-left">
                                <img src="../assets/img/logo.png" style="width:200px">
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="المنتج الثاني">
                        <div class="product-content-container" v-scrollanimation>
                            <div class="product-content-container-right">
                                <h6 class="product-content-container-right-title">
                                    الفوائد
                                </h6>
                                <ul class="product-content-container-right-list">
                                    <li class="product-content-item">
                                        <span class="product-content-item-number">
                                            01
                                        </span>
                                        أرشيف كامل لكل عمليات الدفع
                                    </li>
                                    <li class="product-content-item">
                                        <span class="product-content-item-number">
                                            02
                                        </span>
                                        أرشيف كامل لكل عمليات الدفع
                                    </li>
                                    <li class="product-content-item">
                                        <span class="product-content-item-number">
                                            03
                                        </span>
                                        أرشيف كامل لكل عمليات الدفع
                                    </li>
                                </ul>
                            </div>
                            <div class="product-content-container-left">
                                <img src="../assets/img/logo.png" style="width:200px">
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Product",
    components: {
    },
    data() {
        return {
        };
    }
};

</script>


<style lang="scss">
.product {
    padding: 150px 50px;
}

.product .product-container {
    max-width: 1000px;
    margin: 0px auto;
}

.product .product-title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #18191f;
    margin-bottom: 60px;
}

.product .product-content .nav-link.active {
    font-weight: bold;
    border-top: none;
    border-right: none;
    border-left: none;
    color: var(--main-color);
    border-bottom: 3px solid var(--main-color);

}

.product .nav-tabs .nav-link:hover {
    border-color: transparent;
}

.product .nav-tabs .nav-link.active:hover {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 3px solid var(--main-color);
}

.product .nav-tabs {
    padding: 0px 20px
}

.product .nav-link {
    border-top: none !important;
    border-right: none !important;
    border-left: none !important;
    text-align: center;
    font-weight: lighter;
    color: #727788;
    border-bottom: 2px solid #d9dbe1;
    cursor: pointer;
    transition: all .4s;
}

.product .product-content-container {
    display: flex;
    margin: 0 60px;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    max-width: 1000px;
    gap: 40px
}

@media (max-width: 767px) {
    .product .product-content-container {
        flex-direction: column;
        align-items: flex-start;
    }
}

.product .product-content-container-right-title {
    font-weight: bold;
    color: #18191f;
    font-size: 18px;
    text-align: justify;
    margin: 10px 0px;
}

.product .product-content-container-right-list {
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

.product .product-content-item {
    display: flex;
    align-items: center;
    grid-gap: 20px;
    gap: 20px;
}

.product .product-content-item-number {
    background-color: #ff72d2;
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

.product .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1.5s ease-out;
}

.product .enter {
    opacity: 1;
    transform: translateY(0px);
}
</style>
