import { createStore } from 'vuex';

import robotsModule from './modules/robots';
import usersModule from './modules/users';

export default createStore({
    // State is not inherited by modules
    state: {
        foo: 'root-foo', // root state item inc non namespace store
    },
    modules: {
        robots: robotsModule,
        users: usersModule,
    },
    getters: {
    },
});
