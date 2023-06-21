<template>
    <!--TODO: add a background picture to the first div!-->
    <div v-if="user.userID || user.role === 'admin'" class="flex flex-grow items-center justify-center">
        <div id="popUp" class="flex fixed w-full h-full backdrop-blur z-50 items-center justify-center hidden">
            <div class="fixed inset-0 flex items-center justify-center">
                <div class="bg-base-300 text-white px-6 py-4 rounded-md shadow-md">
                    <p class="mb-2">You sure you want to delete?</p>
                    <div class="flex justify-center">
                        <button class="btn btn-md md:btn-md btn-accent shadow-xl mx-2" v-on:click="handleYes()">Yes</button>
                        <button class="btn btn-md md:btn-md btn-error shadow-xl mx-2 text-white" v-on:click="handleNo()">No</button>
                    </div>
                </div>
            </div>
        </div>
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
            user: {}, // Holds the user data
        };
    },
    created() {
        // Fetch user data on component creation
        axios.get(`http://localhost:8000/users/${this.$route.params.id}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.user = response.data; // Assign the fetched user data to the 'user' variable
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        // Function to delete a user
        deleteUser: function () {
            const popUp = document.getElementById('popUp');
            popUp.classList.remove('hidden'); // Show the delete confirmation pop-up
        },
        // Function to edit a user
        editUser: function () {
            window.location.href = `/users/edit/${this.$route.params.id}`; // Redirect to the user edit page
        },
        // Function to handle "No" button click on the delete confirmation pop-up
        handleNo: function () {
            const popUp = document.getElementById('popUp');
            popUp.classList.add('hidden'); // Hide the delete confirmation pop-up
        },
        // Function to handle "Yes" button click on the delete confirmation pop-up
        handleYes: function () {
            axios.delete(`http://localhost:8000/users/${this.$route.params.id}/delete`, { withCredentials: true })
                .then((response) => {
                    this.user = response.data; // Update the user data after deletion
                    window.location.href = '/users'; // Redirect to the users list page
                })
                .catch((error) => {
                    console.error(error);
                });

            const popUp = document.getElementById('popUp');
            popUp.classList.add('hidden'); // Hide the delete confirmation pop-up
        }
    }
};
</script>


<style scoped>

</style>