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
    ]
})