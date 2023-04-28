<script>
import colMain from './colMain.vue';
import { store } from '../store';
import appFoodVue from './appFood.vue';
import newArrivals from './newArrivals.vue';
import testimonials from './testimonials.vue';
import appButtonVue from './appButton.vue';
import newsletterVue from './newsletter.vue';
import colView from './colView.vue';
import colIcons from './colIcons.vue'
export default{
    components:{
        colMain,
        appFoodVue,
        newArrivals,
        testimonials,
        appButtonVue,
        newsletterVue,
        colView,
        colIcons
    },
    data(){
        return{
            store,
            name: "appMain",
            products : store.productsUp,
            food: store.productsFood,
            productsSell: store.productsdown,
            tips: [
                {
                    imga: '../assets/img/blog-1.jpg',
                    product: "How to 'loose leash walk' your dog",
                    price: 'April 21st, 2020'
                },
                {
                    imga: '../assets/img/blog-2.jpg',
                    product: 'Stop cats from scratching furniture',
                    price: 'April 19th, 2020'
                },
                {
                    imga: '../assets/img/blog-3.jpg',
                    product: 'Where to buy the pet food',
                    price: 'April 18th, 2020'
                },
                {
                    imga: '../assets/img/blog-4.jpg',
                    product: 'Proper care for your pet toys',
                    price: 'April 17th, 2020'
                },
            ],
            views: [
                {
                    img: '../assets/img/banner-8-2x.jpg',
                    text: 'FIND THE BEST ANIMAL SUPPLIES',
                    tittle: 'Popular accessories',
                    button: 'View all toys accessories'
                },
                {
                    img: '../assets/img/banner-9-2x.jpg',
                    text: 'FIND THE BEST FOOD',
                    tittle: 'New food arrival',
                    button: 'View all products'
                },
            ],
            newproductsUp: [
                {
                    img: 8,
                    product: 'Colored pet bed',
                    price: '$26.00'
                },
                {
                    img: 2,
                    product: 'Color ball set',
                    price: '$29.00'
                },
                {
                    img: 3,
                    product: 'Dog bone',
                    price: '$18.00',
                    off: '$29.00'
                }
            ],
            newproductsDown:[
                {
                    img: 4,
                    product: 'Animal transport bag',
                    price: '$29.00'
                },
                {
                    img: 5,
                    product: 'Animal transport cage',
                    price: '$35.00'
                },
                {
                    img: 10,
                    product: 'Closable cat litter',
                    price: '$16.00'
                }
            ],
            icons: [
                {
                    icon: 'fa-paper-plane',
                    text: 'Free wordwide'
                },
                {
                    icon: 'fa-map',
                    text: 'Find stores neat you'
                },
                {
                    icon: 'fa-dollar-sign',
                    text: 'Best prices guarranteed'
                },
                {
                    icon: 'fa-credit-card',
                    text: 'All credit card accepted'
                },
            ]


        }
    }

}
</script>

<template>
    <div class="container container d-flex gap-4 text-center flex-column mt-5 align-items-center">
        <h2>Browse by category</h2>
        <p class="w-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum maiores veritatis quas quod, perferendis quibusdam? Commodi, voluptatem.</p>
    </div>
    <div class="container d-flex gap-4 text-center mt-5">
        <colMain v-for="product in products" :product="product"/>
    </div>
    <div class="container d-flex gap-3 my-5">
        <appFoodVue v-for="product in food" :product="product" />
    </div>
    <div class="container newArrivals my-5">
        <newArrivals/>
    </div>
    <div class="container">
        <p class="ms-color">All-times best sellers</p>
        <h3>Items everyone loves</h3>
        <div class="ms-container d-flex gap-4 text-center">
            <colMain v-for="product in productsSell" :product="product"/>
        </div>
    </div>
    <testimonials />
    <div class="container ">
        <div class="tips d-flex flex-column align-items-center position-relative">
            <newsletterVue class="position-absolute ms-position"/>
            <div class="margin-container d-flex flex-column align-items-center">
                <h2>Get the best tips & tricks</h2>
                <p class="ms-color">Recent articles</p>
                <div class="ms d-flex gap-3">
                    <colMain v-for="tip in tips" :product="tip"/>
                </div>
                <appButtonVue :mensage="'Read all articles'" class="ms-back-green "/>
            </div>
        </div>
    </div>
    <div class="container-fluido d-flex">
        <colView v-for="view in views" :view="view"/>
    </div>
    <div class="info">
        <div class="container d-flex">
            <colIcons v-for="icon in icons" :icon="icon" class="ms-height d-flex flex-column justify-content-center align-items-center gap-3"/>
        </div>
    </div>
    <div class="container text-center mt-5">
        <h3>New products arrival</h3>
        <p>Latest products</p>
        <div class="new-products-up d-flex gap-3 my-4">
            <colMain v-for="product in newproductsUp" :product="product" class="text-center"/>
        </div>
        <div class="new-products-down d-flex gap-3  my-4">
            <colMain v-for="product in newproductsDown" :product="product" class="text-center"/>
        </div>
    </div>
</template>

<style scoped>
.ms-color{
    color: #1E3020;
}

.ms-back-green{
    margin: 40px 0;
    background-color: #77AB82;
    color: #fff;
    width: 200px;
}

.ms-position{
    top: -70px;
}

.margin-container{
    margin-top: 350px;
}
.info{
    background-image: url(../assets/img/bg-transparent-3.png);
    height: 250px;
    background-size: contain;
    background-color: #1E3020;
}
.ms-height{
    color: #fff;
    height: 250px;
}
</style>