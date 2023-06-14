<template>
    <div class="navbar bg-base-300">
        <div class="flex-1">
            <router-link to="/">
            <a class="btn btn-ghost normal-case text-4xl">Portfolio</a>
            </router-link>
            <router-link to="/games">
                <a class="btn btn-ghost normal-case text-xl">GameDev</a>
            </router-link>
            <router-link to="/pixelart">
                <a class="btn btn-ghost normal-case text-xl">PixelArt</a>
            </router-link>
            <router-link to="/uiux">
                <a class="btn btn-ghost normal-case text-xl">UI/UX</a>
            </router-link>
            <router-link to="/users">
                <a v-if="users" class="btn btn-ghost normal-case text-xl">Users</a>
            </router-link>
        </div>
        <div class="flex-none">
            <div v-if="users" class="dropdown dropdown-end">
                <label v-if="users" tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full con">
                        <img src="./icons/profile.png"/>
                    </div>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <router-link :to="'/users/' + users.id">
                        <li><a>Profile</a></li>
                    </router-link>
                    <li><a v-on:click="userLogout">Logout</a></li>
                </ul>
            </div>
            <div v-else>
                <router-link to="/login">
                    <a class="btn-wide btn btn-accent normal-case text-xl">Login</a>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            users: {
            },
        };
    },
    created() {
        this.getData()
        console.log(this.users)
    },
    methods: {
        getData() {
            axios.get(`http://localhost:3000/`, { withCredentials: true })
                .then((response) => {
                    console.log(response.data);
                    this.users = response.data;
                    console.log(this.users.id); // Log the updated users object here
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        userLogout(){
            console.log("loggedOut");
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
