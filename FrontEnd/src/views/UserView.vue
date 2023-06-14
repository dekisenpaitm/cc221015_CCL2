<template>
    <div v-if="user">
        <p>UserID: {{user.userID}}</p>
        <p>UserName: {{user.name}}</p>
        <p>Email: {{user.email}}</p>
        <p>Role: {{user.role}}</p>
        <button v-on:click="deleteUser" class="btn btn-accent">Delete</button>
        <button v-on:click="editUser" class="btn btn-accent">Edit</button>

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "UserView",
    data() {
        return {
            user: {}
        };
    },
    created() {
        axios.get(`http://localhost:3000/users/${this.$route.params.id}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }})
            .then((response) => {
                this.user = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        deleteUser: function() {
            axios.delete(`http://localhost:3000/users/${this.$route.params.id}/delete`, {withCredentials:true})
                .then((response) => {
                    this.user = response.data;
                    window.location.href = '/';
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        editUser: function(){
            window.location.href =`/users/edit/${this.$route.params.id}`
        }
    }
};
</script>

<style scoped>

</style>