<script>
    export default{
        props:{
            testimonial: Object
        },
        data(){
            return{
                name: 'colTestimonial'
            }
        },
        methods:{
            src(){
                return new URL(this.testimonial.img, import.meta.url).href
            }
        }
    }
</script>

<template>
    <div class="col d-flex flex-column align-items-center gap-3 mt-3">
        <div class="img">
            <img :src="src()" alt="">
        </div>
        <p class="ms-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellat, cum numquam ratione animi cumque error quod dese.</p>
        <p class="ms-green">{{ this.testimonial.user }}</p>
    </div>
</template>

<style scoped lang="scss">
.col{
    .img{
        width: 100px;
        img{
            border-radius: 50%;
        }
    }
    .ms-white{
        color: #fff;
    }
    .ms-green{
        color: #79849A;
    }
}


</style>