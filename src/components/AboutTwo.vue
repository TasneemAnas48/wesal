<template>
    <div id="about-two" class="two">
        <div class="two-content">
            <div class="container" style="max-width: 1300px">
                <div class="row row-two">
                    <div class="content col-lg-6">
                        <span class="note"> {{ note }}</span>
                        <h3 class="main-title">{{ contentTitle }}</h3>
                        <div v-scrollanimation class="items" v-for="(item, i) in  items" :key="i">
                            <b-icon class="item-icon" icon="check2"></b-icon>
                            <p class="item-paragraph">
                                {{ item }}
                            </p>
                        </div>
                    </div>
                    <div class="animation col-lg-5">
                        <img v-scrollanimation src="../assets/img/about.jpg"
                            style="padding-right: 50px;padding-top: 30px">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "AboutTwo",
    props: ['note', 'contentTitle', 'items'],
    components: {

    },
    data() {
        return {

        };
    }
};

</script>


<style lang="scss">
#about-two {
    padding: 40px 0px 80px 0px;
}

.two .two-content {
    margin-top: 40px;
}

.two .main-title {
    font-weight: bold;
    font-size: 25px;
}

@media (min-width: 992px) {
    .two .animation {
        display: flex;
        flex-flow: column;
        align-items: start;
    }

    .two .content {
        max-width: 35% !important;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
    }

    .two .row-two {
        justify-content: end;
    }

}

@media (max-width: 991px) {
    .two .content {
        margin-top: 40px;
        max-width: 70%;
    }

    .two .row-two {
        justify-content: center;
        flex-flow: wrap-reverse;
    }

}

.two .note {
    color: var(--main-color);
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 2px;
}

.two .item-paragraph {
    color: var(--gray);
    font-size: 17px;
}

.two .items {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    text-align: justify;
}

.two .item-icon {
    color: var(--main-color);
    font-size: 20px;
    margin: 3px 10px;
}
</style>
