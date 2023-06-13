<template>
    <form id="login-form" class="text-outline transparent" @submit.prevent="loginUser">
        <label for="uname">Username:</label>
        <input v-model="username" id="uname" type="text" placeholder="Enter Username" name="uname" required>
        <label for="pw">Password:</label>
        <input v-model="password" id="pw" type="password" placeholder="Enter Password" name="pw" required>
        <button class="button" type="submit">Login</button>
    </form>
    <div id="sign-up" class="">
        <span>No Account yet?</span><a href="#">Sign Up here!</a>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        loginUser() {
            axios.post('http://localhost:3000/login', {
                uname: this.username,
                pw: this.password
            })
                .then(response => {
                    console.log(response.data);
                    window.location.href = '/';
                })
                .catch(error => {
                    console.error(error);
                });

            this.username = '';
            this.password = '';
        }
    }
};
</script>

<style scoped>

</style>
