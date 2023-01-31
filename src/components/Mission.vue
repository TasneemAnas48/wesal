<template>
    <div id="misson" class="misson">
        <div class="misson-content">
            <div class="container" style="max-width: 1300px">
                <div class="row row-misson">
                    <div class="content col-lg-6">
                        <span class="note"> {{ $t('misson.note') }}</span>
                        <h3 class="main-title">{{ $t('misson.contentTitle') }}</h3>
                        <div class="items" v-for="(item, i) in  $t('misson.items')" :key="i">
                            <b-icon class="item-icon" icon="check2"></b-icon>
                            <p class="item-paragraph">
                                {{ item }}
                            </p>
                        </div>
                    </div>
                    <div class="animation col-lg-6">
                        <img src="../assets/img/about.jpg" style="padding-right: 50px;padding-top: 30px">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "Misson",
    components: {

    },
    data() {
        return {

        };
    }
};

</script>


<style lang="scss">
#misson {
    padding: 40px 0px 80px 0px;
}

.misson .misson-content {
    margin-top: 40px;
}

.misson .main-title {
    font-weight: bold;
}

@media (min-width: 992px) {
    .misson .animation {
        display: flex;
        flex-flow: column;
        align-items: start;
    }

    .misson .content {
        max-width: 35% !important;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
    }

    .misson .row-misson {
        justify-content: end;
    }

}

@media (max-width: 991px) {
    .misson .content {
        margin-top: 40px;
        max-width: 70%;
    }

    .misson .row-misson {
        justify-content: center;
    }
}

.misson .note {
    color: var(--main-color);
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 2px;
}

.misson .item-paragraph {
    color: var(--gray);
    font-size: 17px;
}

.misson .items {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    text-align: justify;
}

.misson .item-icon {
    color: var(--main-color);
    font-size: 20px;
    margin: 3px 10px;
}
</style>
