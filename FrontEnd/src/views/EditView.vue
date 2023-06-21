<template>
    <div v-if="(user.userID === siteID && user.userID && siteID)" class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">Edit credentials now!</h1>
                <p class="py-6">Edit your user credentials and make sure to remember them! Changes are permanently and cant be changed.</p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form id="edit-form"
                          :action="`/users/${$route.params.id}/edit`"
                          method="PUT"
                          class="text-outline transparent">

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">New Username</span>
                            </label>
                            <input id="name" type="text" v-model="user.name" placeholder="Enter Username" name="name" required class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">New E-mail</span>
                            </label>
                            <input input id="email" type="text" v-model="user.email" placeholder="Enter Email" name="email" required class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">New Password</span>
                            </label>
                            <input id="password" type="password" v-model="user.password" placeholder="Enter New Password" name="password" required class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Confirm New Password</span>
                            </label>
                            <input id="pw-conf" v-model="user.passwordConfirmation" type="password" placeholder="Re-Enter New Password" name="psw-conf" required class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button type="button" @click="editUser" class="btn btn-accent">Change</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="hero">
        <div class="hero-content flex-col">
        <div class="flex"><p>You don't have the rights to access this.</p></div>
        <div class="flex"><router-link to="/"><button class="btn btn-accent">Back to Homepage</button></router-link></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ['loggedIn'],
    data() {
        return {
            user: {
                userID: "",
                name: "",
                password: "",
                passwordConfirmation: "",
                email: "",
            },
            siteID: "",
        };
    },
    mounted() {
        axios
            .get(`http://localhost:8000/users/${this.$route.params.id}/edit`, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if ((response.data.userID === parseInt(this.$route.params.id)) || response.data.role === 'admin') {
                    response.data.password = "";
                    this.user = response.data; // Assign the retrieved user details to the "user" data property
                    this.siteID = parseInt(this.$route.params.id);
                } else {
                    // Handle unauthorized access or invalid user
                }
            })
            .catch((error) => {
                // Handle error
            });
    },
    methods: {
        editUser() {
            if (this.user.password === this.user.passwordConfirmation && this.user.password !== "" && this.user.passwordConfirmation !== "") {
                axios
                    .put(
                        `http://localhost:8000/users/${this.$route.params.id}/edit`,
                        this.user, {
                            withCredentials: true,
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        },
                    )
                    .then((response) => {
                        this.$emit('editUser', { send: true, message: 'Thank you! Your credentials have been changed! :D' });
                        this.redirect(); // Redirect the user after successfully editing the user details
                    })
                    .catch((error) => {
                        this.$emit('editUser', { send: false, message: 'Please make sure to fill all fields! :(' });
                    });
            } else {
                this.$emit('editUser', { send: false, message: "Ooooopsies! There's an error in your passwords! :(" });
            }
        },
        redirect: function() {
            setTimeout(function() {
                window.location.href = '/';
            }, 2000);
        }
    },
};
</script>

