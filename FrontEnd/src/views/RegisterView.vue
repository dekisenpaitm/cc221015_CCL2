<template>
    <div v-if="!loggedIn" class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Register now!</h1>
                <p class="py-6">Register now to get access to liking and commenting on stuff.</p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form class="text-outline transparent" @submit.prevent="createUser">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Username</span>
                        </label>
                        <input id="name" v-model="name" type="text" placeholder="Enter Username" name="name" required class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">E-mail</span>
                        </label>
                        <input input id="email" v-model="email" type="text" placeholder="Enter Email" name="email" required class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input id="password" v-model="password" type="password" placeholder="Enter Password" name="password" required class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Confirm Password</span>
                        </label>
                        <input id="pw-conf" v-model="passwordConfirmation" type="password" placeholder="Re-Enter Password" name="psw-conf" required class="input input-bordered" />
                        <label class="label">
                            <router-link to="/login"><a class="text-accent label-text-alt link link-hover">You have an existing account?</a></router-link>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-accent">Register</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div v-else><p>Seems like you're already logged in!</p></div>
</template>

<script>
import axios from "axios";

export default {
    props: ['loggedIn'],
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        };
    },
    methods: {
        createUser() {
            axios.post('http://localhost:8000/register/add', {
                name: this.name,
                email: this.email,
                password: this.password,
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }})
                .catch(error => {
                    console.error(error);
                });
            window.location.href = '/login'
        }
    }
};
</script>


<style scoped>

</style>