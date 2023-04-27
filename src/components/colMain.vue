<script>
export default{
    props:{
        product : Object
    },
    data(){
        return{
            name: "appColMain"
        }
    },
    methods:{
        src(){
            return new URL(`../assets/img/product-${this.product.img}.jpg`, import.meta.url).href
        }
    }

}
</script>

<template>

    <div class="col">
        <div class="img">
            <img :src="src()" alt="">
        </div>
        <p class="mt-3">
            {{ this.product.product }}
            <span v-if="this.product.quantity">
                ({{ this.product.quantity }}) 
            </span>
        </p>
        <p>
            <span class="off">
                {{ this.product.off }}
            </span>
            {{ this.product.price }}
        </p>
    </div>
 
</template>

<style scoped lang="scss">
span.off{
    font-size: .8rem;
    text-decoration: line-through;
}

</style>
