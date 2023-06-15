<template>
    <div v-if="user.userID || user.role === 'admin'">
            <div class="hero min-h-screen bg-base-200">
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
                        <div class="flex w-full">
                            <div class="grid h-20 flex-grow card rounded-box place-items-center">
                                <button class="btn btn-accent btn-wide" v-on:click="deleteUser">Delete</button>
                            </div>
                            <div class="divider"></div>
                            <div class="grid h-20 flex-grow card rounded-box place-items-center">
                                <button class="btn btn-accent btn-wide" v-on:click="editUser">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div v-else>oops.. you're not supposed to be here</div>
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