<template>
    <!--TODO: add a background picture to the first div!-->
    <div v-if="user.userID || user.role === 'admin'" class="flex flex-grow items-center justify-center">
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img class="max-w-sm rounded-lg shadow-2xl" src="../images/Avatar.png"/>
                    <div>
                        <h1 class="text-5xl font-bold">Welcome to your profile {{ user.name }}!</h1>
                        <p class="py-6">Here you can either edit or delete your profile! Be careful, you can't revert
                            changes!</p>
                        <br>
                        <p>UserID: {{ user.userID }}</p>
                        <p>UserName: {{ user.name }}</p>
                        <p>Email: {{ user.email }}</p>
                        <br>
                        <div class="flex w-full gap-4">
                                <button class="btn btn-md md:btn-md lg:btn-lg btn-accent shadow-xl" v-on:click="deleteUser">Delete</button>
                            <div class="divider"></div>
                                <button class="btn btn-md md:btn-md lg:btn-lg btn-accent shadow-xl" v-on:click="editUser">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div v-else class="hero">
        <div class="hero-content flex-col">
            <div class="flex"><p>You don't have the rights to access this.</p></div>
            <div class="flex"><router-link to="/"><button class="btn btn-md md:btn-md lg:btn-lg btn-accent shadow-xl">Back to Homepage</button></router-link></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "UserView",
    data() {
        return {
            user:{},
        };
    },
    created() {
        axios.get(`http://localhost:3000/users/${this.$route.params.id}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.user = response.data;

            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        deleteUser: function () {
            axios.delete(`http://localhost:3000/users/${this.$route.params.id}/delete`, {withCredentials: true})
                .then((response) => {
                    this.user = response.data;
                    window.location.href = '/';
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        editUser: function () {
            window.location.href = `/users/edit/${this.$route.params.id}`
        }
    }
};
</script>

<style scoped>

</style>