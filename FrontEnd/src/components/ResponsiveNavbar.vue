<template>
    <div class="navbar bg-base-300 bg-opacity-75 drop-shadow-lg" @deleteMessage="refreshData" @sendMessage="refreshData">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" alt="menubar"/></svg>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <router-link to="/games"><li><a>GameDev</a></li></router-link>
                    <router-link to="/pixels"><li><a>PixelArt</a></li></router-link>
                    <router-link to="/uiux"><li><a>UI/UX</a></li></router-link>
                    <router-link to="/about"><li><a>About</a></li></router-link>
                    <router-link to="/contact"><li><a>Contact</a></li></router-link>
                    <li v-if="loggedIn"><router-link  to="/users"><a>Users</a></router-link></li>
                    <li v-if="!loggedIn"><router-link to="/register"><a>Register</a></router-link></li>
                </ul>
            </div>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-terminal mx-2 w-0 h-0 md:w-16 md:h-16" viewBox="0 0 16 16">
                <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
            </svg></div>
            <router-link to="/"><a class="btn btn-ghost normal-case text-4xl">Portfolio</a></router-link>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 text-sm sm:text-md md:text-xl lg:text-2xl">
                <router-link to="/games"><li><a>GameDev</a></li></router-link>
                <router-link to="/pixels"><li><a>PixelArt</a></li></router-link>
                <router-link to="/uiux"><li><a>UI/UX</a></li></router-link>
                <router-link to="/about"><li><a>About</a></li></router-link>
                <router-link to="/contact"><li><a>Contact</a></li></router-link>
                <li v-if="loggedIn"><router-link to="/users"><a>Users</a></router-link></li>
                <li v-if="!loggedIn"><router-link to="/register"><a>Register</a></router-link></li>
            </ul>
        </div>
        <div class="navbar-end">
            <div v-if="loggedIn" class="dropdown dropdown-end">
                <div v-if="messages.length > 0" class="indicator">
                    <span class="indicator-item indicator-bottom indicator-start badge badge-secondary">New</span>
                    <label v-if="loggedIn" tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full con">
                        <img src="./icons/profile.png" alt="icon for profile picture"/>
                    </div>
                </label>
                </div>
                <div v-else>
                    <label v-if="loggedIn" tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full con">
                            <img src="./icons/profile.png" alt="icon picture"/>
                        </div>
                    </label>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <router-link :to="'/users/' + loggedIn.id">
                        <li><a>Profile</a></li>
                    </router-link>
                    <div v-if="loggedIn.role === 'admin'">
                    <router-link :to="'/messages/'">
                        <li>
                            <div class="indicator">
                                <span class="indicator-item indicator-top indicator-end badge badge-secondary">{{messages.length}}</span>
                                <a>Messages</a>
                            </div>
                        </li>
                    </router-link>
                    </div>
                    <li><button v-on:click="userLogout">Logout</button></li>
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
    props: ['loggedIn'], // Props received from the parent component

    data() {
        return {
            messages: [], // An array to store the fetched messages
            users: {}, // An object to store user data (currently empty)
        };
    },

    mounted() {
        // Fetch messages from the server when the component is mounted
        axios.get('http://localhost:8000/contact', {
            withCredentials: true, // Send cookies along with the request
            headers: {
                'Content-Type': 'application/json' // Set the request content type
            }
        })
            .then(response => {
                this.messages = response.data; // Store the fetched messages in the component's data
            });
    },

    methods: {
        userLogout() {
            // Send a logout request to the server when the user logs out
            axios.get('http://localhost:8000/logout', {
                withCredentials: true, // Send cookies along with the request
                headers: {
                    'Content-Type': 'application/json' // Set the request content type
                }
            })
                .then(response => {
                    window.location.href = '/'; // Redirect the user to the homepage after logout
                });
        },

        refreshData(){
            axios.get('http://localhost:8000/contact', {
                withCredentials: true, // Send cookies along with the request
                headers: {
                    'Content-Type': 'application/json' // Set the request content type
                }
            })
                .then(response => {
                    this.messages = response.data; // Store the fetched messages in the component's data
                });
        }
    }
};
</script>

<style scoped>

</style>