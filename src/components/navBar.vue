<script>
    import {store} from "../store"
    export default{
        data(){
            return{
                store,
                array: store.pages

            }
        }
    
    }
    
</script>

<template>
    <div class="container-fluid nav border-bottom">
        <div class="container d-flex justify-content-between gap-3 ali">
            <div class="logo d-flex align-items-center">
                <a href="" class=" d-flex align-items-center">
                    <div class="img me-2">
                        <img src="../assets/img/logo-symbol.png" alt="">
                    </div>
                    <div class="scrita">
                        <strong>Avada Pet Supplies</strong>
                    </div>
                </a>
            </div>
            <div class="search col d-flex align-items-center justify-content-center">
                <form class="d-flex" role="search">
                    <div class="bar form-control  rounded-pill ms-width">
                        <i class="fa-solid fa-magnifying-glass w-25"></i>
                        <input class="w-75  border-0 " type="search" placeholder="Search" aria-label="Search">
                    </div>
                </form>
            </div>
            <div class="col questions d-flex align-items-center ">
                <p>
                    <strong>Questions?</strong>
                    Call us: 1.800.123.4567
                </p>
            </div>    
            <div class="login  d-flex align-items-center justify-content-end gap-3">
              <a href="">
                 <i class="fa-solid fa-bag-shopping"></i>
              </a>
              <a href="">
                    <i class="fa-regular fa-user"></i>
              </a>
            </div>
        </div>
        </div>
        <div class="container d-flex justify-content-center page align-items-center">
            <ul class="d-flex gap-5">
                <li v-for="page in array">
                    <a href="">
                        {{ page }}  <i class="fa-solid fa-chevron-down"></i>
                    </a>
                </li>
            </ul>
        </div>
</template>

<style scoped lang="scss">
@use 'style/navBar/styleNav.scss'

</style>
