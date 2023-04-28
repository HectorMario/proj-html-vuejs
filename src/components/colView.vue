<script>
import appButton from './appButton.vue';
    export default{
        components:{
            appButton
        },
        props:{
            view : Object
        },
        data(){
            return{
                name: 'colView'
            }
        },
        methods:{
            src(){
                return new URL(this.view.img, import.meta.url).href
            }
        }
    }
</script>

<template>
    <div  :style="{backgroundImage: 'url('+ src() +')'}" class="col d-flex flex-column align-items-center justify-content-center gap-5">
        <p>{{ this.view.text }}</p>
        <h3> {{ this.view.tittle }}</h3>
        <appButton :mensage="this.view.button"/>
    </div>
</template>

<style scoped lang="scss">
.col{
    background-size: cover;
    height: 400px;
    p{
        margin: 0;
        color: #fff;
    }
    h3{
        color:#fff
    }
}

</style>