<script>
import colFooter from './colFooter.vue';
import appButtonVue from './appButton.vue';
    export default{
        components:{
            colFooter,
            appButtonVue
        },
        data(){
            return{
                name: 'footer',
                list: [
                    {
                        title: 'Shop by brand',
                        links: ['Bed', 'Food', 'toys', 'Transport']
                    },
                    {
                        title: 'Useful links',
                        links: ['My account', 'Orders', 'Checkout', 'Cart']
                    }

                ]
            }
        }
    }
</script>

<template>
 <div class="ms-color-green">
    <div class="container d-flex align-items-center container-border">
        <div class="col ">
            <div class="logo d-flex">
                <div class="img">
                    <img src="../assets/img/logo-symbol.png" alt="">
                </div>
                <h3>Avada Pet Supplies</h3>
            </div>
            <ul>
                <li>1234 Avada Avenue Avadaville</li>
                <li>info@your-company.com</li>
                <li>Call us: (1) 234 5678</li>
            </ul>
        </div>
        <colFooter v-for="link in list" :link="link" class=""/>
        <div class="col ms-back-green text-center">
            <h4>Subscribe to our newsletter</h4>
            <form action="" class="d-flex flex-column gap-4 align-items-center mt-4">
            <input type="email" placeholder="Insert your email" >
            <appButtonVue :mensage="'Subscribe'" class="ms-back-gree w-50"/>
            </form>
        </div>
    </div>
 </div>
 <div class="ms-black d-flex justify-content-center align-items-center">
    <p>Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Power by WordPres</p>
 </div>
</template>

<style scoped lang="scss">
.ms-color-green{
    background-color: #1E3120;
    color: #fff;
    height: 600px;
    padding-top: 50px;
    .container-border{
        height: 350px;
        border-bottom: gray solid 1px;
        .col{
            height: 250px;
            .logo{
                .img{
                    width: 40px;
                    img{
                        filter: invert(100);
                    }
                }
            }
            ul{
                margin-top: 30px;
                list-style: none;
                padding: 0;
                li{
                    margin: 5px 0;
                }
            }
        }
        .ms-back-green{
            padding-top: 30px;
            background-color: #264229;
            border-radius: 10px;
            background-image: url(../assets/img/bg-transparent-3.png);
            input{
                padding: 5px 10px;
                border-radius: 20px;
                border: none;
            }
            .ms-back-gree{
                background-color: #3D6F42;
                color: #fff;
            }
        }
    }
}

.ms-black{
    background-color: black;
    color: #fff;
    height: 50px;
    p{
        margin:0;
    }
}

</style>