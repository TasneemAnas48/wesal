<template>
    <div id="my-accordion" class="my-accordion">
        <div class="container">
            <div class="accordion" role="tablist">
                <b-card no-body v-for="(item, index) in $t('FAQ')" :key="index">
                    <b-card-header header-tag="header" role="tab">
                        <b-button block v-b-toggle="index.toString()" variant="info">
                            {{ item.quastion }}
                            <b-icon icon="plus-lg"></b-icon>
                        </b-button>
                        <div class="line"></div>
                    </b-card-header>
                    <b-collapse :id="index.toString()" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{ item.answar }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Accordion",
    components: {
    },
    data() {
        return {
        };
    }
};

</script>


<style lang="scss">
.accordion .card-body,
.accordion .btn-info {
    text-align: justify;
}

.accordion .btn-info {
    background-color: white;
    color: #01244a;
    border: none;
    height: 50px;
    font-size: 17px;
    border-radius: 8px;
    padding: 10px 20px;
    transition: all 0.4s;
    padding: 30px;
    color: var(--gray);
    font-weight: bold;
}

@media (max-width: 767px) {
    .accordion .btn-info {
        font-size: 14px;
        padding: 10px 15px;
    }
}

.accordion .btn-info:hover {
    background-color: white;
    color: #01244a;
    border: none;
    transition: all 0.4s;
}

.accordion .btn-info:focus {
    border: none !important;
    box-shadow: none !important;
    background-color: white !important;
    color: #01244a !important;
}

.accordion .card {
    border: none;
    margin-top: 15px;
    border-radius: 8px !important;
    box-shadow: 0 0 21px #0000001f;
}

.accordion .card-header {
    padding: 0px;
    background-color: transparent;
    border: none;
}

.accordion .card-body {
    border: none;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    margin: 0px 5px;
}

.accordion .card-text {
    color: #18191f;
    font-size: 17px;
    color: var(--gray);
}

.accordion .collapsed {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .bi-plus-lg {
        transform: rotate(0);
        transition: all 0.4s;
    }
}

.accordion .not-collapsed {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .bi-plus-lg {
        transform: rotate(45deg);
        transition: all 0.4s;
    }
}

.accordion .btn .b-icon.bi {
    font-size: 100%;
}

.accordion .line {
    border-bottom: 1px solid #80808047;
    margin: 0px 30px;
}
</style>