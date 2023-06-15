<template>
    <form
            id="edit-form"
            :action="`/users/${$route.params.id}/edit`"
            method="PUT"
            class="text-outline transparent"
            @submit.prevent="editUser"
    >
        <div>username: <input type="text" v-model="user.name"></div>
        <div>userpw: <input type="password" v-model="user.password"></div>
        <div>email: <input type="text" v-model="user.email"></div>
        <button type="submit">update</button>
    </form>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            user: {
                name: "",
                password: "",
                email: "",
            },
        };
    },
    mounted() {
        axios
            .get(`http://localhost:3000/users/${this.$route.params.id}/edit`,{
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                this.user = response.data;
            })
            .catch((error) => {
                console.log("Failed to fetch user data:", error);
            });
    },
    methods: {
        editUser() {
            axios
                .put(
                    `http://localhost:3000/users/${this.$route.params.id}/edit`,
                    this.user, {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json'
                        }},
                )
                .then((response) => {
                    window.location.href = `/users/${this.$route.params.id}`
                })
                .catch((error) => {
                    console.log("Failed to update user:", error);
                });
        },
    },
};
</script>
