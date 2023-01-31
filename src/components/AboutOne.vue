<template>
    <div id="about-one" class="one">
        <div class="one-content">
            <div class="container" style="max-width: 1300px">
                <div class="row row-one">
                    <div class="animation col-lg-5">
                        <img v-scrollanimation src="../assets/img/about.jpg"
                            style="padding-left: 50px;padding-top: 30px">
                    </div>
                    <div class="content col-lg-6">
                        <span class="note"> {{ note }}</span>
                        <h3 class="main-title">{{ contentTitle }}</h3>
                        <div v-scrollanimation class="items" v-for="(item, i) in items" :key="i">
                            <b-icon class="item-icon" icon="check2"></b-icon>
                            <p class="item-paragraph">
                                {{ item }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutOne",
    props: ['note', 'contentTitle', 'items'],
    components: {

    },
    data() {
        return {
        };
    },
};

</script>


<style lang="scss">
#about-one {
    padding: 20px 0px 80px 0px;
}

.one .one-content {
    margin-top: 40px;
}

.one .main-title {
    font-weight: bold;
    font-size: 25px;
}

@media (min-width: 992px) {
    .one .animation {
        max-width: 44% !important;
        display: flex;
        flex-flow: column;
        align-items: flex-end;
    }

    .one .content {
        max-width: 40% !important;
        display: flex;
        flex-flow: column;
        align-items: self-start;
    }
}

@media (max-width: 991px) {
    .one .content {
        margin-top: 40px;
        max-width: 70%;
    }

    .one .row-one {
        justify-content: center;
    }
}

.one .note {
    color: var(--main-color);
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 2px;
}

.one .item-paragraph {
    color: var(--gray);
    font-size: 17px;
}

.one .items {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    text-align: justify;
}

.one .item-icon {
    color: var(--main-color);
    font-size: 20px;
    margin: 3px 10px;
}

.content .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1.5s ease-out;
}

.content .enter {
    opacity: 1;
    transform: translateY(0px);
}

.animation .before-enter {
    opacity: 0;
    transform: translate(0) scale(0);
    transition: all 2s ease-out;
}

.animation .enter {
    opacity: 1;
    transform: translate(0) scale(1);
}
</style>
