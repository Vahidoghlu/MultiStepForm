import { createStore } from 'vuex';
import {getField, updateField} from 'vuex-map-fields'

const store = createStore({
    state: {
        user: {
            firstName: 'Lorem ipsum',
            email: 'tg@gm.com',
            phone: '+994555555555'
        },
        planValue: null,
        pickAddOns: [],
        step: 1,
        cardData: [
            {
                id: 1,
                header: "Arcade",
                price: "$9/mo",
                priceNumber: '9'
            },
            {
                id: 2,
                header: "Advanced",
                price: "$12/mo",
                priceNumber: '12'
            },
            {
                id: 3,
                header: "Pro",
                price: "$15/mo",
                priceNumber: '15'
            },
        ],

        pickaddsData: [
            {
                id: 1,
                header: "Online Service",
                text: "Access to multiplayer games",
                price: "$1/mo",
                priceNumber: '1'
            },
            {
                id: 2,
                header: "Larger Storage",
                text: "Extra 1TB of cloud save",
                price: "$2/mo",
                priceNumber: '2'
            },
            {
                id: 3,
                header: "Customizable Profile",
                text: "Custom theme on your profile",
                price: "$3/mo",
                priceNumber: '3'
            },
        ],

    },
    getters: {
        getField
    },
    mutations: {
        updateField,
    }
});

export default store;