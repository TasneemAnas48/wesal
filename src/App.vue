<template>
  <div id="app" :class="[isAr ? 'ar' : 'en' ] ">
    <router-view />
  </div>
</template>
<script>

export default {
    data() {
        return {
            lang: '',
        }
    },
    computed:{
      isAr(){
        this.lang = localStorage.getItem("lang")
        let htmlElement = document.documentElement
        if (this.lang == 'ar') 
            htmlElement.setAttribute('lang', 'ar')
        else 
            htmlElement.setAttribute('lang', 'en')        
        return this.lang == 'ar'
      }
    },
};

</script>
<style lang="scss">
html:lang(ar) * {
  letter-spacing: 0!important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.en{
  font-family:  "Manrope-Medium",sans-serif !important;
  direction: ltr;
}

.ar{
  font-family:  "Al-Jazeera-Arabic",sans-serif !important;
  direction: rtl;
  // letter-spacing: 0 !important;
}

@font-face {
    font-family: "Al-Jazeera-Arabic";
    src: local("Al-Jazeera-Arabic"),
        url(./assets/fonts/Al-Jazeera-Arabic.ttf) format("truetype");
}

@font-face {
    font-family: "Manrope-Medium";
    src: local("Manrope-Medium"),
        url(./assets/fonts/Manrope-Medium.ttf) format("truetype");
}

</style>
