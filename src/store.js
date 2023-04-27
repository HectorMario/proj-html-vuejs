import {reactive} from "vue";

export const store = reactive({
    pages:['Home','Shop','About', 'Blog', 'Contact', 'Shop by brand'] ,
    infoJumbo: [
        {
            strong: 'International',
            text: 'Shiping Services',
            icon: 'fa-regular fa-map'
        },
        {
            strong: 'store hours',
            text: 'See our',
            second: 'and services',
            icon: 'fa-regular fa-clock'
        },
        {
            strong:'best deals',
            text: 'Shiping Services',
            icon: 'fa-solid fa-check'
        }
    ],
    productsUp: [
        {
            product: 'bed',
            quantity: 1,
            img: 9
        },
        {
            product: 'Food',
            quantity: 6,
            img: 3
        },
        {
            product: 'Toys',
            quantity: 6,
            img: 2
        },
        {
            product: 'Trasport',
            quantity: 6,
            img: 4
        },
    ],
    productsdown:[
        {
            product: 'Transport cage',
            price: '$25.00',
            img: 21
        },
        {
            product: 'Dog leash',
            price: '$25.00',
            img: 20
        },
        {
            product: 'Animal transport cage',
            price: '$25.00',
            off: '$35.00',
            img: 16
        },
        {
            product: 'Colorful cat leash',
            price: '$12.00',
            img: 11
        },
    ],
    productsFood:[
        {
            tittle: 'Kibble',
            text: 'Dry dog food',
            img: 18
        },
        {
            tittle: 'Moidt',
            text: 'Canned dog food',
            img: 17
        },
        {
            tittle: 'Frozen',
            text: 'Freeze-Dried dog food',
            img: 16
        },
    ]
})