<script>
import appColVue from './appCol.vue';
import { store } from '../store';
import appButton from './appButton.vue';
import AppButton from './appButton.vue';
export default{
    components:{
    appColVue,
    appButton,
    AppButton
},
    data(){
        return{
            store,
            name:'jumbotron',
            infoJumbo: store.infoJumbo
        }
    }
}
</script>

<template>
 
    <div class="conntianer-fluid ms-backgraound ">
        <div class="container d-flex justify-content-center ">
            <appColVue v-for="info in infoJumbo" :info="info" class="d-flex justify-content-center align-items-center ms-white"/>
        </div>
        <div class="banner d-flex justify-content-center">
            <div class="container d-flex align-items-center ms-white">
                <div class="ms-container d-flex gap-4 flex-column">
                    <p>FIND THE BEST ANIMAL SUPPLIES</p>
                    <h1>We know animals are a part of your family, let us help take care of them</h1>
                    <AppButton :mensage="'Learn more about us'" class="w-50"/>
                </div>
            </div>
        </div>
        <div class="container d-flex justify-content-center mt-3">
            <div class="img-food">
                <img src="../assets/img/food-transparent-5-200x112.png" alt="">
            </div>
            <div class="off d-flex align-items-center">
                <p class="mx-5">
                    Get $25 OFF  your first purchase of our homemade pet food!
                </p>
                <a href="">
                    Visit the shop
                </a>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
@use 'style/jumbotron/jumbotron.scss'

</style>