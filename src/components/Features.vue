<template>
    <section id="features" class="features">
        <div class="features-header">
            <span class="note"> {{ $t('features.note') }}</span>
            <h2 class="main-title-features">
                {{ $t('features.headerTitle') }}
            </h2>
        </div>
        <div class="container">
            <div class="parent">
                <div v-scrollanimation class="item" v-for="(item, index) in $t('features.items')" :key="index">
                    <div class="img">
                        <img src="../assets/img/feature.jpg" />
                    </div>
                    <div class="features-content">
                        <h5 class="title"> {{ item.title }} </h5>
                        <p class="content"> {{ item.content }} </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Features",
    components: {
    },
    data() {
        return {
        };
    },
};
</script>


<style lang="scss">
.features {
    padding-top: 50px
}

.features .main-title-features {
    font-size: 40px;
    font-weight: bold;
}

@media (min-width: 992px) {
    .features .main-title-features {
        font-size: 40px;
    }
}

@media (max-width: 992px) {
    .features .main-title-features {
        font-size: 35px;
    }
}

.features .note {
    color: var(--main-color);
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 2px;
}

@media (min-width: 992px) {
    .features .parent {
        grid-template-columns: repeat(2, auto);
    }
}

@media (max-width: 991px) {
    .features .parent {
        grid-template-columns: repeat(1, auto) !important;
    }
}

.features .parent {
    margin: 80px 80px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    grid-column-gap: 120px;
    grid-row-gap: 100px;
}

.features .item {
    display: grid;
    grid-template-columns: 10fr 90fr;
    column-gap: 30px;
}

.features .title {
    font-weight: bold;
    color: #1e7294;
    text-align: justify;
}

.features .content {
    color: #31323b;
    font-size: 13px;
    text-align: justify;
    margin-top: 20px;
}

.parent .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1.5s ease-out;
}

.parent .enter {
    opacity: 1;
    transform: translateY(0px);
}
</style>