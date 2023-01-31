<template>
    <section id="payment" class="payment">
        <img src="../assets/img/payment-side-left.png" class="left-img">
        <img src="../assets/img/payment-side-right.png" class="right-img">
        <div class="payment-content" v-scrollanimation>
            <h3 class="payment-title">
                طرق الدفع
            </h3>
            <ul class="payment-list">
                <li class="payment-list-item">
                    <div class="payment-list-item-img">
                        <img src="../assets/img/1.svg" class="payment-list-item-svg">
                    </div>
                    <h4 class="payment-list-item-header">
                        طريقة 1
                    </h4>
                    <p class="payment-list-item-discription">
                        تسعى منصة وصال لجعل الخدمة متاحة لجميع المغتربين السوريين من خلال دعمها لأكثر من طريقة دفع. 
                    </p>
                </li>
                <li class="payment-list-item">
                    <div class="payment-list-item-img">
                        <img src="../assets/img/1.svg" class="payment-list-item-svg">
                    </div>
                    <h4 class="payment-list-item-header">
                        طريقة 2
                    </h4>
                    <p class="payment-list-item-discription">
                        تسعى منصة وصال لجعل الخدمة متاحة لجميع المغتربين السوريين من خلال دعمها لأكثر من طريقة دفع. 
                    </p>
                </li>
                <li class="payment-list-item">
                    <div class="payment-list-item-img">
                        <img src="../assets/img/1.svg" class="payment-list-item-svg">
                    </div>
                    <h4 class="payment-list-item-header">
                        طريقة 3
                    </h4>
                    <p class="payment-list-item-discription">
                        تسعى منصة وصال لجعل الخدمة متاحة لجميع المغتربين السوريين من خلال دعمها لأكثر من طريقة دفع. 
                    </p>
                </li>
                <li class="payment-list-item">
                    <div class="payment-list-item-img">
                        <img src="../assets/img/1.svg" class="payment-list-item-svg">
                    </div>
                    <h4 class="payment-list-item-header">
                        طريقة 4
                    </h4>
                    <p class="payment-list-item-discription">
                        تسعى منصة وصال لجعل الخدمة متاحة لجميع المغتربين السوريين من خلال دعمها لأكثر من طريقة دفع. 
                    </p>
                </li>
            </ul>
        </div>
        <div class="payment-content" style="margin-top: 50px" v-scrollanimation>
            <h3 class="payment-title">
                العملات المتاحة
            </h3>
            <ul class="payment-list">
                <li class="payment-list-item">
                    <div class="payment-list-item-img">
                        <img src="../assets/img/1.svg" class="payment-list-item-svg">
                    </div>
                    <h4 class="payment-list-item-header">
                        العملات المتاحة
                    </h4>
                    <p class="payment-list-item-discription">
                        ندعم الدفع مقابل الخدمة بالعملات التالية
                    </p>
                </li>
                <li class="payment-list-item">
                    <div class="payment-list-item-img">
                        <img src="../assets/img/1.svg" class="payment-list-item-svg">
                    </div>
                    <h4 class="payment-list-item-header">
                        العملات المتاحة
                    </h4>
                    <p class="payment-list-item-discription">
                        ندعم الدفع مقابل الخدمة بالعملات التالية
                    </p>
                </li>
                <li class="payment-list-item">
                    <div class="payment-list-item-img">
                        <img src="../assets/img/1.svg" class="payment-list-item-svg">
                    </div>
                    <h4 class="payment-list-item-header">
                        العملات المتاحة
                    </h4>
                    <p class="payment-list-item-discription">
                        ندعم الدفع مقابل الخدمة بالعملات التالية
                    </p>
                </li>
                <li class="payment-list-item">
                    <div class="payment-list-item-img">
                        <img src="../assets/img/1.svg" class="payment-list-item-svg">
                    </div>
                    <h4 class="payment-list-item-header">
                        العملات المتاحة
                    </h4>
                    <p class="payment-list-item-discription">
                        ندعم الدفع مقابل الخدمة بالعملات التالية
                    </p>
                </li>
            </ul>
            </div>
    </section>
</template>

<script>
export default {
    name: "Payment",
    data() {
        return {

        };
    }
};
</script>

<style lang="scss">
.payment {
    background-image: url(../assets/img/header-background.png);
    background-size: cover;
    padding: 50px 100px;
    position: relative;
}

@media (max-width: 700px) {
    .payment {
        padding: 40px 50px;
    }
}

.payment .left-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 53%;
}

.payment .right-img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
}

@media (max-width: 992px) {
    .payment .right-img {
        height: 80%;
    }

    .payment .left-img {
        display: none;
    }
}

.payment .payment-content {
    position: relative;
    background-color: #fff;
    padding: 80px 80px;
    border-radius: 22.85px;
    box-shadow: 14px 4rem 8rem rgb(24 37 56 / 12%);
}

.payment .payment-title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #18191f;
    margin-bottom: 60px;
}

.payment .payment-list {
    display: grid;
    padding: 0px;
    justify-items: center;
    align-content: center;
    grid-column-gap: 50px;
    -moz-column-gap: 50px;
    column-gap: 50px;
    grid-row-gap: 50px;
    row-gap: 50px;
}

@media (min-width: 1100px) {
    .payment .payment-list {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (min-width: 900px) and (max-width: 1100px) {
    .payment .payment-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

.payment .payment-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.payment .payment-list-item-img {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 100;
}

.payment .payment-list-item-svg {
    width: 70%
}

.payment .payment-list-item-header {
    font-size: 18px;
    font-weight: 800;
    color: #18191f;
}

.payment .payment-list-item-discription {
    font-size: 15px;
    color: #18191f;
    text-align: center;
}

.payment .line {
    border-bottom: 1px solid gray;
}

.payment .before-enter {
    opacity: 0;
    transition: all 2s ease-out;
}

.payment .enter {
    opacity: 1;
}
</style>