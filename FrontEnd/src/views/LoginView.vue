<template>
    <div class="flex items-center justify-center">
        <div class="flex-grow">
            <div class="hero bg-base-200 h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Welcome Back! It's time to discover new Stuff!</p>
                    </div>
                    <form @submit.prevent="loginUser">
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                        <a class="label-text-alt link link-hover" href="#">Forgot password?</a>
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
                .post("http://localhost:3000/login", data, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    window.location.href = "/";
                })
                .catch((error) => {
                    console.error(error);
                });

            this.username = "";
            this.password = "";
        },
    },
};
</script>

<style scoped>

</style>
