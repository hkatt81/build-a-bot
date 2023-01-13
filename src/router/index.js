import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
// import Search from '../search/Search.vue';

export default createRouter({
    history: createWebHashHistory(), // Enables browser history
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/build',
            name: 'Build',
            component: RobotBuilder,
        },
        {
            path: '/parts/:partType/:id', // route params
            name: 'Parts',
            component: PartInfo,
        },
        // {
        //     path: '/search',
        //     name: 'Search',
        //     component: Search,
        // },
    ],
});
