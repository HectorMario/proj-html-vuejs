<script>
import navBar from './navBar.vue';
import jumbotron from './jumbotron.vue';
export default{
    components:{
        navBar,
        jumbotron
    },
    data(){
        return{
            name: "appHeader"
        }
    }

}
</script>

<template>

    <navBar/>
    <jumbotron/>
 
</template>

<style scoped>


</style>
