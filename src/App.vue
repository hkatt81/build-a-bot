<template>
    <header>
        <nav>
            <ul>
                <li class="nav-item">
                    <img
                        src="./assets/build-a-bot-logo.png"
                        alt="build a bot logo"
                        class="logo"
                    />
                    Build-a-Bot
                </li>
                <li class="user-name">
                    {{ user.userName }}
                    <button @click="changeUserName()">Change</button>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <RobotBuilder />
        <!-- <Search /> -->
    </main>
</template>

<script>
// import HomePage from './home/HomePage.vue';
import RobotBuilder from './build/RobotBuilder.vue';
// import Search from './search/Search.vue';

export default {
    name: 'App',
    components: {
        RobotBuilder,
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
    margin: 0 auto;
    padding: 30px;
    background-color: #fff;
    width: 1024px;
    min-height: 300px;
}
header {
    background-color: #999;
    width: 1084px;
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
.user-name {
    height: auto;
    margin: auto 32px;
    list-style: none;
}
</style>
