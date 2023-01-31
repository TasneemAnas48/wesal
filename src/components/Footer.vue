<template>
    <footer id="footer" class="footer">
        <img src="../assets/img/footer-bg-right.png" class="footer-image-left">
        <img src="../assets/img/footer-bg-left.png" class="footer-image-right">
        <div class="footer-left">
            <img src="../assets/img/logo.png" style="width:100px" class="logo">
            <p class="copyrights-text"> {{ $t('footer.copyright1') }}</p>
            <p class="copyrights-text"> {{ $t('footer.copyright2') }}</p>
            <ul class="social-links">
                <li>
                    <a href="https://www.facebook.com/wesalapp" target="_blank">
                        <img src="../assets/img/facebook.png">
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send/?phone=%2B447378460010&text&type=phone_number&app_absent=0"
                        target="_blank">
                        <img src="../assets/img/whatsapp.png" width="60px">
                    </a>
                </li>
            </ul>
        </div>
        <div class="footer-right">
            <div class="column">
                <h5 class="header">{{ $t('footer.company') }}</h5>
                <ul class="list">
                    <li v-for="(headerTitle, index) in $t('navbar.headerTitles')" :key="index"
                        v-scroll-to="'#' + headerTitle.scroll">
                        {{ headerTitle.title }}
                    </li>
                </ul>
            </div>
            <div class="column">
                <h5 class="header">
                    {{ $t('footer.support') }}
                </h5>
                <ul class="list">
                    <li>
                        {{ $t('footer.termsAndConditions') }}
                    </li>
                    <li>
                        {{ $t('footer.privacy') }}
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: "Footer",
    components: {
    },
    data() {
        return {
        };
    }
};

</script>


<style lang="scss">
.footer {
    background-image: url(../assets/img/footer-background-image.png);
    background-size: cover;
    display: grid;
    column-gap: 500px;
    position: relative;
    overflow: hidden;
    padding: 60px 100px;
}

@media (min-width: 992px) {
    .footer {
        grid-template-columns: 20fr 80fr;
    }

    .footer .footer-right {
        grid-template-columns: 30% 60%
    }

}

@media (max-width: 991px) {
    .footer {
        grid-template-columns: repeat(1, 1fr);
    }

    .footer .footer-right {
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
    }

    .footer .column {
        margin-top: 50px;
    }
}


.footer .footer-image-right {
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
    height: 100%;
}

.footer .footer-image-left {
    bottom: -10px;
    right: 0;
    position: absolute;
    z-index: 0;
    height: 100%;
}

.footer .copyrights-text {
    color: var(--gray);
    font-size: 14px;
    margin-bottom: 5px;
}

.footer .footer-left {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer .logo {
    margin-bottom: 30px;
}

.footer .social-links {
    margin-top: 20px;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 40px;
    z-index: 100;
}

.footer .footer-right {
    z-index: 3;
    display: grid;
    // grid-template-columns: .7fr .7fr 1fr;
    grid-column-gap: 6rem;
    column-gap: 6rem;
}

.footer .footer-right .column {
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    text-align: justify;
}

.footer .footer-right .header {
    color: #18191f;
    font-weight: bold;
}

.footer .footer-right .list {
    list-style: none;
    color: var(--gray);
    font-size: 15px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}

.footer .footer-right .list li {
    cursor: pointer;
}
</style>
