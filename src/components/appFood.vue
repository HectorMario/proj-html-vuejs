<script>
import appButtonVue from './appButton.vue';
export default{
    components:{
        appButtonVue
    },
    props:{
        product : Object
    },
    data(){
        return{
            name: "appFoodMain"
        }
    },
    methods:{
        src(){
            return new URL(`../assets/img/food-transparent-${this.product.img}-200x210.png`, import.meta.url).href
        }
    }

}
</script>

<template>
    <div class="col text-center ms-background ">
        <div class="info">
            <h3>{{ this.product.tittle }}</h3>
            <p> {{ this.product.text }}</p>
        </div>
        <div class="img">
            <img :src="src()" alt="">
        </div>
        <div class="buy mt-4">
            <appButtonVue :mensage="`Shop ${this.product.tittle} food`" class=" ms-green  px-3"/>  
        </div>
    </div>
</template>

<style scoped lang="scss">
    .ms-background{
        padding: 50px 0;
        background-image: url(../assets/img/bg-transparent-3.png);
        background-color: #1E3120;
        h3{
            color: #fff;
        }
        p{
            color: #77AB82;
        }
        .ms-green{
            background-color: #77AB82;
            color: #fff;
        }
        
    }

</style>