<template>
    <div class="flex justify-center flex-row flex-wrap mx-28">
            <UserGrid :users="users" :loggedIn="loggedIn"/>
    </div>
</template>
<script>
import axios from "axios";
import UserGrid from "@/components/UserGrid.vue";

export default {
    name: "UsersView",
    components: {UserGrid},
    props: ['loggedIn'],
    data() {
        return {
            users: [],
        };
    },
    created() {
        axios.get(`http://localhost:3000/users`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.users = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>

