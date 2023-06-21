<template>
    <div class="flex justify-center flex-row flex-wrap mx-4 md:mx-20 lg:mx-64">
        <UserGrid :loggedIn="loggedIn" :users="users"/>
    </div>
</template>
<script>
import axios from "axios";
import UserGrid from "@/components/UserGrid.vue";

export default {
    name: "UsersView",
    components: { UserGrid }, // Import and use the UserGrid component
    props: ['loggedIn'], // Declare a prop named 'loggedIn'
    data() {
        return {
            users: [], // Holds the list of users
        };
    },
    created() {
        // Fetch the list of users on component creation
        axios.get(`http://localhost:8000/users`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.users = response.data; // Assign the fetched list of users to the 'users' variable
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>


