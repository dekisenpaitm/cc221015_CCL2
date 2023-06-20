<template>
    <div class="fixed hidden w-full top-0 z-50">
        <a v-if="send === true"><PopUpItem :message="message" /></a>
        <a v-else><AlertItem :message="message" /></a>
    </div>
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
                        <button @click="createUser" type="button" class="btn btn-accent">Register</button>
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
import PopUpItem from "@/components/PopUpItem.vue";
import AlertItem from "@/components/AlertItem.vue";

export default {
    components: {AlertItem, PopUpItem},
    props: ['loggedIn'],
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            send:"",
            message:"",
        };
    },
    methods: {
        createUser() {
            if(this.password === this.passwordConfirmation) {
                if (this.name !== "" && this.email !== "" && this.password !== "" && this.passwordConfirmation !== "") {
                    axios.post('http://localhost:8000/register/add', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    }, {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(response => {
                        if (response.data === 'OK') {
                            this.send = true;
                            this.openAlert("Thank you for registering! You can now like && comment my content! You'll be redirected in a second :)")
                            this.redirect()
                            this.name = "";
                            this.email = "";
                            this.password = "";
                            this.passwordConfirmation = ""
                        }
                    })
                        .catch(error => {
                            this.send = false;
                            this.openAlert("If you see this alert, something went very wrong... contact me pls >.<")
                        });
                } else {
                    this.openAlert("Please make sure to fill out all fields! :(")
                }
            } else {
                this.openAlert("Your Password && PasswordConfirmation are not the same! :(")
                this.password="";
                this.passwordConfirmation="";
            }
        },
        closeAlert: function() {
            const alertContainer = document.querySelector('.fixed');
            alertContainer.classList.add('hidden')
        },
        openAlert: function(message) {
            this.message = message
            const alertContainer = document.querySelector('.fixed');
            alertContainer.classList.remove('hidden');
            setTimeout(this.closeAlert,3000)
        },
        redirect: function(){
            setTimeout(function(){
                window.location.href='/';},5000)
        }
    }
};
</script>


<style scoped>

</style>