<template>
    <div v-if="!loggedIn" class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Register now!</h1>
                <p class="py-6">Register now to get access to liking and commenting on stuff.</p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form class="text-outline transparent">
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
                        <input id="email" v-model="email" type="text" placeholder="Enter Email" name="email" required class="input input-bordered" />
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
                        <button @click="createUser" type="button" class="btn btn-accent">Register</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="hero">
            <div class="hero-content flex-col">
                <div class="flex text-4xl font-bold text-center"><p>You're already logged in! :(</p></div>
                <br>
                <div class="flex"><router-link to="/"><button class="btn btn-md md:btn-md lg:btn-lg btn-accent shadow-xl">Back to Homepage</button></router-link></div>
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
    props: ['loggedIn'], // Receive the 'loggedIn' prop
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            send: "", // Variable to control whether to send a message or not
            message: "", // Message to be sent
        };
    },
    methods: {
        createUser() {
            if (this.password === this.passwordConfirmation) { // Check if the passwords match
                if (this.name !== "" && this.email !== "" && this.password !== "" && this.passwordConfirmation !== "") {
                    // Check if all required fields are filled
                    axios.post('http://localhost:8000/register/add', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    }, {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => {
                            if (response.data === 'OK') {
                                this.send = true; // Set 'send' to true to indicate successful registration
                                this.$emit('createUser', { send: true, message: "Thank you && Welcome! You'll be redirected in a second! :D" });
                                this.redirect(); // Redirect the user after successful registration
                                this.name = "";
                                this.email = "";
                                this.password = "";
                                this.passwordConfirmation = "";
                            }
                        })
                        .catch(error => {
                            this.send = false; // Set 'send' to false to indicate registration failure
                            this.$emit('createUser', { send: false, message: 'Either the Username || Email is already in use! :(' });
                        });
                } else {
                    this.$emit('createUser', { send: false, message: 'Make sure to fill out the full form! :(' });
                }
            } else {
                this.$emit('createUser', { send: false, message: 'Oooopsies, your passwords are not the same! :(' });
                this.password = "";
                this.passwordConfirmation = "";
            }
        },
        redirect: function () {
            setTimeout(function () {
                window.location.href = '/';
            }, 5000); // Redirect the user to the homepage after a delay of 5 seconds
        }
    }
};
</script>



<style scoped>

</style>