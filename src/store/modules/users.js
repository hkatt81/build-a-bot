import axios from 'axios';

export default {
    // Not a namespace module
    state: {
        user: null,
        foo: 'users-foo',
    },
    mutations: {
        // rootState does not work here
        updateCurrentUser(state, user) {
            state.user = user;
        },
    },
    getters: {
        // Accessing root state within a module
        foo(state, getters, rootState) {
            return `users-getter/${rootState.foo}`;
        },
    },
    actions: {
        // Can use rootState here
        signIn({ commit }) {
            axios.post('/api/sign-in')
                .then((result) => commit('updateCurrentUser', result.data))
                .catch(console.error);
        },
    },
};
