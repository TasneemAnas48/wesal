<template>
    <header style="direction: ltr">
        <b-navbar toggleable="lg">
            <img src="../assets/img/logo.png" style="margin-left: 2vw; width:70px">
            <b-navbar-toggle target="nav-collapse">
                <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="x-lg"></b-icon>
                    <b-icon v-else icon="list"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item v-for="(headerTitle, index) in $t('navbar.headerTitles')" :key="index"
                        v-scroll-to="'#' + headerTitle.scroll" @click="goToRoute(headerTitle.scroll)">
                        {{ headerTitle.title }}</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto" style="gap: 15px">
                    <!-- <custom-button :buttonText="$t('navbar.buttonJoin')" :button1=true class="hidden" /> -->
                    <b-nav-item-dropdown text="AR" right class="language-button" v-if="isAr">
                        <b-dropdown-item v-on:click="handleChange('en')">{{ en }}</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="EN" right class="language-button" v-else>
                        <b-dropdown-item v-on:click="handleChange('ar')">{{ ar }}</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<script>
import CustomButton from "@/components/Button.vue";
export default {
    name: "Navbar",
    components: {
        CustomButton,
    },
    data() {
        return {
            en: 'English',
            ar: 'العربية',
            lang: '',
        };
    },
    methods: {
        handleChange(selectedLang) {
            localStorage.setItem('lang', selectedLang)
            window.location.reload()
        },
        goToRoute(wantedRoute) {
            if (wantedRoute == "faq" && this.$route.name != "faq")
                this.$router.replace({ name: 'faq' })
            else if (this.$route.name == "faq" && wantedRoute != "faq")
                this.$router.replace({ name: 'home' })
        }
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
.navbar-light .navbar-nav .nav-link {
    color: var(--gray) !important;
    font-weight: 500 !important;
    border-bottom: 1px solid transparent;
    transition: all .2s ease-in;
}

.navbar-light .navbar-nav .nav-link:hover {

    color: var(--main-color) !important;
    border-bottom-color: var(--main-color) !important;
    transition: all .2s ease-in;
}

.navbar-nav {
    margin-top: 30px;
    margin-left: 20px;
    align-items: center;
}

.navbar-expand-lg {
    margin-right: 0.5vw;
}

.dropdown-toggle::after {
    display: none !important;
}

.dropdown .dropdown-menu {
    transition: all .3s ease-out;
    max-height: 0;
    display: block;
    opacity: 0;
}

.dropdown.show .dropdown-menu {
    max-height: 200px;
    opacity: 1;
}

.language-button a {
    background-color: white;
    border: none !important;
    box-shadow: 0 10px 20px rgb(30 114 148 / 20%);
    transition: all .3s ease-out !important;
    height: 45px;
    padding: 10px 20px !important;
    border-radius: 8px;
}

.language-button a span {
    color: var(--main-color) !important;
}

.language-button .dropdown-menu {
    background-color: transparent;
    border: none;
    transition: all .3s ease-in-out;
}

.language-button .dropdown-item {
    width: 60% !important;
    margin-left: 65px;
    color: var(--gray);
    box-shadow: -2px 4px 45px rgb(0 0 0 / 13%);
    border-radius: 12px;
    text-align: center;
}

.language-button .dropdown-item:hover {
    background-color: white !important;
    color: var(--main-color);
}

@media (max-width: 991px) {
    .hidden {
        display: none !important;
    }

    .language-button a {
        width: 60px !important;
    }

    .dropdown-toggle {
        margin-left: 60px !important;
    }
}

.navbar .collapsed,
.navbar .not-collapsed {
    border: none;
    color: var(--main-color) !important;
    font-size: 50px;
}

.navbar .not-collapsed {
    font-size: 35px;
    margin-top: 10px;
    margin-right: 5px
}
</style>
