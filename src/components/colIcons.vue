<script>
    export default{
        props:{
            icon: Object
        },
        data(){
            return{
                name: 'colIcons'
            }
        }
    }
</script>

<template>
    <div class="col ">
        <div class="icon">
            <i class="fa-regular" :class="this.icon.icon"></i>
        </div>
        <p>{{ this.icon.text }}</p>
    </div>
</template>

<style scoped>
    i{
        font-size: 2rem;
    }

</style>