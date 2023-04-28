<script>
import appHeader from './components/appHeader.vue';
import appMainVue from './components/appMain.vue';
import appFotterVue from './components/appFotter.vue';
export default{
  components: {
    appHeader,
    appMainVue,
    appFotterVue
  }
}
</script>

<template>
  <appHeader/>
  <appMainVue/>
  <appFotterVue/>
</template>

<style  lang="scss">
@use "./style/styleGeneral.scss" as *;

</style>
