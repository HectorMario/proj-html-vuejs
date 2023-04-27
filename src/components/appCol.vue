<script>
export default{
    props:{
        info : Object
    },
    data(){
        return{
            name: 'info'
        }
    },
    methods:{
        stampText(object){
            if(object.second){   
                return `${object.text} ${object.strong} ${object.second}`
            } else if (object.strong == 'International'){
                return `${object.strong}  ${object.text}`
            } else{
                return `${object.text} ${object.strong}`
            }
        }
    }
}
</script>

<template>
 <div class="col">
    <div class="img">
        <img src="" alt="">
    </div>
    <p>
        <i :class="this.info.icon"></i>

            {{ stampText(this.info) }}
            
    </p>
 </div>
</template>

<style scoped lang="scss">
    p{
        margin: 0;
    }

</style>