import axios from 'axios';

export default {
    namespace: true, // important for mutations getters etc. to keep unique
    state: {
        user: null,
    },
    mutations: {
        updateCurrentUser(state, user) {
            state.user = user;
        },
    },
    getters: {
    },
    actions: {
        signIn({ commit }) {
            axios.post('/api/sign-in')
                .then((result) => commit('updateCurrentUser', result.data))
                .catch(console.error);
        },
    },
};
