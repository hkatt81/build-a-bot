<template>
    <header>
        <nav>
            <ul>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'Home' }" exact>
                        <img
                            src="./assets/build-a-bot-logo.png"
                            alt="build a bot logo"
                            class="logo"
                        />
                        Build-a-Bot
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'Build' }" exact>
                        Build
                    </router-link>
                </li>
                <li class="user-name">
                    {{ user.userName }}
                    <button @click="changeUserName()">Change</button>
                </li>
            </ul>
        </nav>
    </header>
    <div class="container">
        <aside class="aside">
            <router-view name="sidebar"/>
        </aside>
        <main>
            <router-view />
            <!-- <Search /> -->
        </main>
    </div>
</template>

<script>
// import Search from './search/Search.vue';

export default {
    name: 'App',
    components: {
        // Search,
    },
    data() {
        return {
            user: { userName: '©HM 2023' },
        };
    },
    // Provide instead of props for deep nested components
    // Provides data to all child components
    provide() {
        return { user: this.user };
    },
    methods: {
        // Note this does not work if you create new object here
        changeUserName() {
            this.user.userName = '©YO 2999';
        },
    },
};
</script>

<style>
body {
    background: linear-gradient(to bottom, #555, rgb(194, 194, 194));
    background-attachment: fixed;
}
#app {
    font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
}
main {
    padding: 30px;
    background-color: #fff;
    width: 964px;
    min-height: 300px;
}
header {
    background-color: #999;
    width: 1184px;
    margin: 0 auto;
}
ul {
    padding: 3px;
    display: flex;
}
.nav-item {
    display: inline-block;
    padding: 5px 10px;
    font-size: 22px;
    border-right: 1px solid #bbb;
}
.logo {
    vertical-align: middle;
    height: 30px;
}
.nav-link {
    text-decoration: none;
    color: inherit;
}
.user-name {
    height: auto;
    margin: auto 32px;
    list-style: none;
}
/* Built-in vue router style for active links */
.router-link-active {
    color: white;
}
/* OR you can add custom active-class="class-name" to the router-link element */
.container {
    display: flex;
    margin: 10px auto 0 auto;
    justify-content: center;
}
.aside {
    padding: 30px;
    background-color: #aaa;
    width: 100px;
    min-height: 300px;
}
</style>
