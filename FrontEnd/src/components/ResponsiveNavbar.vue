<template>
    <div class="navbar bg-base-300 bg-opacity-75 drop-shadow-lg">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <router-link to="/games"><li><a>GameDev</a></li></router-link>
                    <router-link to="/pixels"><li><a>PixelArt</a></li></router-link>
                    <router-link to="/uiux"><li><a>UI/UX</a></li></router-link>
                    <router-link to="/about"><li><a>About</a></li></router-link>
                    <router-link to="/contact"><li><a>Contact</a></li></router-link>
                    <router-link v-if="loggedIn" to="/users">
                        <li><a>Users</a></li>
                    </router-link>
                    <router-link to="/register">
                        <li><a v-if="!loggedIn">Register</a></li>
                    </router-link>
                </ul>
            </div>
            <router-link to="/"><a class="btn btn-ghost normal-case text-4xl">Portfolio</a></router-link>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 text-sm sm:text-md md:text-xl lg:text-2xl">
                <router-link to="/games"><li><a>GameDev</a></li></router-link>
                <router-link to="/pixels"><li><a>PixelArt</a></li></router-link>
                <router-link to="/uiux"><li><a>UI/UX</a></li></router-link>
                <router-link to="/about"><li><a>About</a></li></router-link>
                <router-link to="/contact"><li><a>Contact</a></li></router-link>
                <router-link v-if="loggedIn" to="/users">
                    <li><a>Users</a></li>
                </router-link>
                <router-link to="/register">
                    <li><a v-if="!loggedIn">Register</a></li>
                </router-link>
            </ul>
        </div>
        <div class="navbar-end">
            <div v-if="loggedIn" class="dropdown dropdown-end">
                <label v-if="loggedIn" tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full con">
                        <img src="./icons/profile.png"/>
                    </div>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <router-link :to="'/users/' + loggedIn.id">
                        <li><a>Profile</a></li>
                    </router-link>
                    <li><a v-on:click="userLogout">Logout</a></li>
                </ul>
            </div>
            <div class="flex-none" v-else>
                <router-link to="/login">
                    <a class="btn btn-md md:btn-md md:btn-wide lg:btn-lg lg:btn-wide btn-accent normal-case text-xl md:text-3xl">Login</a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    props:['loggedIn'],
    data() {
        return {
            users: {
            },
        };
    },
    methods:{
        userLogout(){
            axios.get('http://localhost:3000/logout',{
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                window.location.href = '/'
            })
        },
    }
}
</script>

<style scoped>

</style>