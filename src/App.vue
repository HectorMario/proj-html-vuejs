<script>
import appHeader from './components/appHeader.vue';
import appMainVue from './components/appMain.vue';
export default{
  components: {
    appHeader,
    appMainVue
  }
}
</script>

<template>
  <appHeader/>
  <appMainVue/>
</template>

<style  lang="scss">
@use "./style/styleGeneral.scss" as *;

</style>
