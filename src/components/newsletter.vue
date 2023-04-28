<script>
import appButtonVue from './appButton.vue';
    export default{
        components:{
            appButtonVue
        },
        data(){
            return{
                name: 'newletter'
            }
        }
    }
</script>

<template>
 <div class="container-fluid ms-background d-flex justify-content-center">
    <div class="ms-container d-flex flex-column justify-content-center gap-4">
        <h2>Join our newsletter</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita facilis quae cupiditate nihil?</p>
        <form action="">
            <input type="email" placeholder="Insert your email">
            <appButtonVue :mensage="'Subscribe'" class="ms-back-green"/>
        </form>
    </div>
 </div>
</template>

<style scoped lang="scss">
.ms-background{
    background-image: url(../assets/img/banner-7-2x-scaled.jpg);
    height: 400px;
    background-size: cover;
    background-color: #DCD5D0;
    .ms-container{
        width: 80%;
        form{
            input{
                width: 30%;
                padding: 8px 15px;
                border-radius: 20px;
                border: none;
                background-color: #DCD5D0;
            }
            .ms-back-green{
                background-color: #77AB82;
                margin-left: 20px;
            }
        }
    }
}

</style>