<template>
    <div>
        <b-button class="custom-button "
            :class="{ 'custom-button1': button1, 'custom-button2': button2, 'custom-button3': button3, 'ar': isAr }">
            <span class="button-text">{{ buttonText }}</span>
            <b-icon icon="chevron-left" aria-hidden="true" v-if="isAr"></b-icon>
            <b-icon icon="chevron-right" aria-hidden="true" v-else></b-icon>
        </b-button>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: ['buttonText', 'button1', 'button2', 'button3'],
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
.custom-button .ar {
    direction: rtl !important;
}

.custom-button {
    box-shadow: 0 10px 20px rgb(30 114 148 / 20%);
    height: 45px;
    padding: 7px 20px !important;
    border-radius: 8px !important;

    .button-text {
        transition: all .3s ease-out;
        padding-left: 0px;
        font-weight: bold;
    }
}

.custom-button:hover {
    .button-text {
        transition: all .3s ease-out;
        padding-left: 8px !important;
    }
}

.bi-chevron-left {
    margin-right: 10px;
}

.bi-chevron-right {
    margin-left: 10px;
}

@media (min-width: 1200px) {
    .custom-button {
        font-size: 15px !important;
    }
}

@media (max-width: 1200px) and (min-width: 992px) {
    .custom-button {
        font-size: 14px !important;
    }
}

@media (max-width: 992px) and (min-width: 768px) {
    .custom-button {
        font-size: 13px !important;
    }
}

@media (max-width: 768px) {
    .custom-button {
        font-size: 12px !important;
    }
}



.custom-button1:hover {
    color: var(--main-color) !important;
    background-color: white !important;
    border: none !important;
}

.custom-button1 {
    background-color: var(--main-color) !important;
    border: none !important;
}


.custom-button2 {
    background-color: white !important;
    color: var(--main-color) !important;
    border: 1px solid var(--main-color) !important;
}

.custom-button2:hover {
    color: white !important;
    background-color: var(--main-color) !important;
    border: none !important;
}


.custom-button3 {
    background-color: var(--main-color) !important;
    border: none !important;
}

.custom-button3:hover {
    color: var(--main-color) !important;
    background-color: white !important;
    border: none !important;
}
</style>
