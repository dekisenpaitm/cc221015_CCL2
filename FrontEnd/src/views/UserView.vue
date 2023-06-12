<template>
    <div v-if="user">
        <p>UserID: {{user.userID}}</p>
        <p>UserName: {{user.name}}</p>
        <p>Email: {{user.email}}</p>
        <p>Role: {{user.role}}</p>

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ProductDetailPage",
    data() {
        return {
            user: {}
        };
    },
    created() {
        axios.get(`http://localhost:3000/users/${this.$route.params.id}`)
            .then((response) => {
                this.user = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>

<style scoped>

</style>