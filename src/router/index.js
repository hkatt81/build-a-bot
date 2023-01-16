import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';
// import Search from '../search/Search.vue';

export default createRouter({
    // createWebHistory needs to be handled on the server to work with deep linking
    // i.e. config to always render index page first then the url fragments
    history: createWebHistory(), // Enables browser history
    // createWebHashHistory loads index page first auto but doesn't look as pro.
    // history: createWebHashHistory(), // Enables browser history
    routes: [
        {
            path: '/',
            name: 'Home',
            components: {
                // Using named views see app
                default: HomePage,
                sidebar: SidebarStandard,
            },
        },
        {
            path: '/build',
            name: 'Build',
            components: {
                // Using named views see app
                default: RobotBuilder,
                sidebar: SidebarBuild,
            },
        },
        {
            // Nested routes
            path: '/parts/browse',
            name: 'BrowseParts',
            component: BrowseParts,
            children: [
                {
                    path: 'heads',
                    name: 'BrowseHeads',
                    component: RobotHeads,
                },
                {
                    path: 'torsos',
                    name: 'BrowseTorsos',
                    component: RobotTorsos,
                },
                {
                    path: 'arms',
                    name: 'BrowseArms',
                    component: RobotArms,
                },
                {
                    path: 'bases',
                    name: 'BrowseBases',
                    component: RobotBases,
                },
            ],
        },
        {
            path: '/parts/:partType/:id', // route params
            name: 'Parts',
            component: PartInfo,
            props: true, // enables params as props
            // Route guard to prevent nav if not valid id
            beforeEnter(to, from, next) {
                const isValidId = Number.isInteger(Number(to.params.id));
                next(isValidId); // true if id is a number, otherwise false
            },
        },
        {
            path: '/cart',
            name: 'Cart',
            component: ShoppingCart,
        },
        // {
        //     path: '/search',
        //     name: 'Search',
        //     component: Search,
        // },
    ],
});
