<template>
    <div class="flex flex-grow items-center justify-center">
        <div class="flex-grow md:mx-20 lg:mx-64 my-4">
            <div class="h-full">
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Welcome Back! It's time to discover new Stuff!</p>
                    </div>
                    <form @submit.prevent="loginUser">
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="fixed flex items-center justify-center hidden">
                                <div class="bg-red-400 text-white py-2 px-4 rounded-md shadow-md">
                                    <span class="mr-2">Wrong Username||Password</span>
                                    <button id="closeBtn" class="text-white font-bold" v-on:click="closeAlert">Close</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Username</span>
                                    </label>
                                    <input
                                            id="uname"
                                            v-model="username"
                                            class="input input-bordered"
                                            name="uname"
                                            placeholder="Enter Username"
                                            required
                                            type="text"
                                    />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input
                                            id="pw"
                                            v-model="password"
                                            class="input input-bordered"
                                            name="pw"
                                            placeholder="Enter Password"
                                            required
                                            type="password"
                                    />
                                    <label class="label">
                                       <router-link to="/contact"><a class="text-accent label-text-alt link link-hover">Forgot password?</a></router-link>
                                        <router-link to="/register"><a class="text-accent label-text-alt link link-hover">No account yet?</a></router-link>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-accent" type="submit">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        loginUser() {
            let data = {
                uname: this.username,
                pw: this.password,
            };
            axios
                .post("http://localhost:8000/login", data, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                        if(response.data === "OK"){
                        window.location.href = "/";
                    }else{
                        this.openAlert()
                    }
                })
                .catch((error) => {
                    this.openAlert()
                    console.error(error);
                });

            this.username = "";
            this.password = "";
        },
        closeAlert: function() {
            const alertContainer = document.querySelector('.fixed');
            alertContainer.style.display = 'none';
        },
        openAlert: function() {
            const alertContainer = document.querySelector('.fixed');
            alertContainer.style.display = 'flex';
        },
    },
};
</script>

<style scoped>

</style>
