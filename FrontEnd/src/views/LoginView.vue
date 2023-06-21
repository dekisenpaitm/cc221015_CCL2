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
                    <form>
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
                                       <router-link to="/contact"><a class="text-accent label-text-alt link link-hover">Forgot password?</a></router-link>
                                        <router-link to="/register"><a class="text-accent label-text-alt link link-hover">No account yet?</a></router-link>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button @click="loginUser" class="btn btn-accent" type="button">Login</button>
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
import PopUpItem from "@/components/PopUpItem.vue";
import AlertItem from "@/components/AlertItem.vue";

export default {
    components: { AlertItem, PopUpItem }, // Import and use the necessary components
    data() {
        return {
            username: "",
            password: "",
            send: "",
            message: ""
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
                    if (response.data === "OK") {
                        this.send = true;
                        this.$emit('loginUser', { send: true, message: "Welcome back! :D You'll be redirected in a second <3" });
                        this.redirect();
                    }
                })
                .catch((error) => {
                    this.$emit('loginUser', { send: false, message: "Either your Username or your Password is wrong! :(" });
                    console.error(error);
                });

            this.username = "";
            this.password = "";
        },
        redirect: function () {
            setTimeout(function () {
                window.location.href = '/';
            }, 2000);
        }
    },
};
</script>