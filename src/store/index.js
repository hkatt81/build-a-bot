import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        // Need default for all values to go in store
        cart: [],
        parts: null,
    },
    mutations: {
        // All changes to data must go through here
        addRobotToCart(state, robot) {
            state.cart.push(robot); // Push robot into state
        },
        updateParts(state, parts) {
            state.parts = parts;
        },
    },
    actions: {
        // getParts(context) provides state, getters, commit and dispatch
        // requires something like axios to make http calls
        getParts({ commit }) {
            axios.get('/api/parts')
                // Commit data from api to store using mutation
                .then((result) => commit('updateParts', result.data))
                .catch(console.error); // Log errors to console
        },
        addRobotToCart({ commit, state }, robot) {
            // Creates a new cart array with current cart and robot
            const cart = [...state.cart, robot];
            // Saves this to the api
            axios.post('/api/cart', cart)
                .then(() => commit('addRobotToCart', robot))
                .catch(console.error);
        },
    },
    getters: {
        // Getters are best way to return data after some work is done on it
        cartSaleItems(state) {
            // Filters cart to find only items where head on sale
            // Then returns the array of items
            return state.cart.filter((item) => item.head.onSale);
        },
    },
});
