<script>
export default {
    props: {
        mensage: String
    },
    data() {
        return {
            name: 'buttom'
        }
    }
}
</script>

<template>
    <a href="" class="ms-backgraund-white p-2 text-center">{{ this.mensage }}</a>
</template>

<style scoped lang="scss">
a{
    background-color: #fff;
    text-decoration: none;
    color: black;
    border-radius: 20px;
}
</style>