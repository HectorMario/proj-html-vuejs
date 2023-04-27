<script>
    import appButton from './appButton.vue';
    export default{
        components:{
            appButton
        },
        data(){
            return{

            }
        }
    }
</script>

<template>
    <div class="container-fluid ms-background d-flex flex-column justify-content-center align-items-center ">
        <p>FIND THE BEST ANIMAL SUPPLIES</p>
        <h2 >New arrivals weekly</h2>
        <appButton :mensage="'Learn more about us'" class="mt-5"/>
    </div>
</template>

<style scoped lang="scss">
.ms-background{
    background-image: url(../assets/img/banner-3-2x-scaled.jpg);
    background-size: cover;
    height: 60vh;
    opacity: 1;
    background-color: rgba(0,0,0,.5);
    h2{
        color: #ffffff;
        font-size: 3.5rem;
    }
    p{
        color:#ffffff;
        filter: brightness(1);
    }
}

</style>