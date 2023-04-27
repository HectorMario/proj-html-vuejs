<script>
import colMain from './colMain.vue';
import { store } from '../store';
import appFoodVue from './appFood.vue';
import newArrivals from './newArrivals.vue';
export default{
    components:{
        colMain,
        appFoodVue,
        newArrivals
    },
    data(){
        return{
            store,
            name: "appMain",
            products : store.productsUp,
            food: store.productsFood,
            productsSell: store.productsdown
        }
    }

}
</script>

<template>
    <div class="container container d-flex gap-4 text-center flex-column mt-5 align-items-center">
        <h2>Browse by category</h2>
        <p class="w-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum maiores veritatis quas quod, perferendis quibusdam? Commodi, voluptatem.</p>
    </div>
    <div class="container d-flex gap-4 text-center mt-5">
        <colMain v-for="product in products" :product="product"/>
    </div>
    <div class="container d-flex gap-3 my-5">
        <appFoodVue v-for="product in food" :product="product" />
    </div>
    <div class="container newArrivals my-5">
        <newArrivals/>
    </div>
    <div class="container">
        <p class="ms-color">All-times best sellers</p>
        <h3>Items everyone loves</h3>
        <div class="ms-container d-flex gap-4 text-center">
            <colMain v-for="product in productsSell" :product="product"/>
        </div>
    </div>
</template>

<style scoped>
.ms-color{
    color: #1E3020;
}

</style>