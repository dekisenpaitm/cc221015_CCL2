<template>
    <div class="mx-56">
        <UserGrid :users="users"/>
    </div>
</template>
<script>
import axios from "axios";
import UserGrid from "@/components/UserGrid.vue";

export default {
    name: "UsersView",
    components: {UserGrid},
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

