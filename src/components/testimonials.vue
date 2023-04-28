<script>
import colTestiomonials from './colTestiomonials.vue';
    export default{
        components:{
            colTestiomonials
        },
        data(){
            return{
                name: 'testimonials',
                testimonials: [
                        {
                            img: '../assets/img/avatar-3.jpg',
                            user: 'Lisa Smith, Themefusion'
                        },
                        {
                            img: '../assets/img/avatar-1.jpg',
                            user: 'Melissa Green, Themefusion'
                        },
                        {
                            img: '../assets/img/avatar-4.jpg',
                            user: 'Sam Lewis, Themefusion'
                        },
                ]
            }
        }
    }
</script>

<template>
    <div class="container-fluid ms-background d-flex justify-content-center align-items-end">
        <div class="container text-center">
            <h2>User testimonials</h2>
        </div>
    </div>
    <div class="ms-back">
        <div class="container d-flex text-center gap-3 ">
            <colTestiomonials v-for="testimonial in testimonials" :testimonial="testimonial" class="mt-5"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms-background{
    background-image: url(../assets/img/bg-transparent-3.png);
    background-color: #1E3020;
    background-size: contain;
    height: 100px;
    h2{
        color: #fff
    }
}
.ms-back{
    height: 400px;
    background-color: #1E3020;
}

</style>