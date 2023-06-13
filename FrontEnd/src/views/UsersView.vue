<template>
<div>
    <UserGrid :users="users" />
</div>
</template>

<script>
import axios from "axios";
import UserGrid from "@/components/UserGrid.vue";

export default {
    name: "UsersView",
    components: { UserGrid },
    data() {
        return {
            users: [],
        };
    },
    created() {
        axios.get(`http://localhost:3000/users`)
            .then((response) => {
                this.users = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>

