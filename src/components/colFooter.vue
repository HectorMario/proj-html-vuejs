<script>
    export default{
        props:{
            link : Object
        },
        data(){
            return{
                name: 'colFooter'
            }
        }
    }
</script>

<template>
    <div class="col">
        <ul>
            <h4>

                {{ this.link.title }}
            </h4>
            <li v-for="option in this.link.links">
                <a href="">
                    {{ option }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    ul{
        list-style: none;
        li{
            margin: 20px 0;
            a{
                text-decoration: none;
                color: #fff;
            }
        }
    }
</style>