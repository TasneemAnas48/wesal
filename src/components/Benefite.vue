<template>
    <section id="benefite" class="benefite">
        <img src="../assets/img/benefits.png" class="line-benefite">
        <div class="benefite-right">
            <div class="benefite-article" v-scrollanimation>
                <h6 class="benefite-note">
                    {{ $t('benefite.note') }}
                </h6>
                <h2 class="benefite-title">
                    {{ $t('benefite.title') }}
                </h2>
                <ul class="benefite-list">
                    <li v-for="(item, index) in $t('benefite.list')" :key="index" class="benefite-list-item">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="benefite-left">
            <img src="../assets/img/logo.png" class="img-benefite" v-scrollanimation>
        </div>
    </section>

</template>

<script>

export default {
    name: "Benefite",
    components: {
    },
    data() {
        return {
        };
    }
};

</script>


<style lang="scss">
.benefite {
    background-color: #1e7294;
    padding: 200px 150px;
    display: flex;
    align-items: center;
    grid-gap: 4rem;
    gap: 4rem;
    position: relative;
    justify-content: space-between;
}

@media (min-width: 1100px) {
    .benefite {
        flex-direction: row;
    }
}

@media (max-width: 1100px) {
    .benefite {
        flex-direction: column;
        padding: 100px 50px
    }
}

.benefite .line-benefite {
    position: absolute;
    top: 0;
    height: 100%;
    mix-blend-mode: color-dodge;
    right: 0;
}

.benefite .img-benefite {
    width: 200px;
}

.benefite .benefite-note {
    color: #6ff;
    font-weight: bold;
    text-align: justify;
    font-size: 14px;
}

.benefite .benefite-title {
    font-weight: bold;
    color: white;
    text-align: justify;
}

.benefite .benefite-list {
    display: grid;
    column-gap: 30px;
    grid-row-gap: 30px;
    text-align: justify;
    margin-top: 40px
}

@media (min-width: 850px) {
    .benefite .benefite-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 850px) {
    .benefite .benefite-list {
        grid-template-columns: repeat(1, 1fr);
    }
}

.benefite .benefite-list .benefite-list-item {
    color: white;
}


.benefite .benefite-right .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1.5s ease-out;
}

.benefite .benefite-right .enter {
    opacity: 1;
    transform: translateY(0px);
}

.benefite .benefite-left .before-enter {
    opacity: 0;
    transform: translateY(-100px);
    transition: all 1.5s ease-out;
}

.benefite .benefite-left .enter {
    opacity: 1;
    transform: translateY(0px);
}
</style>
