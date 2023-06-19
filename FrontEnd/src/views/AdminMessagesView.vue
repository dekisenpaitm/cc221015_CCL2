<template>
    <div class="flex justify-center w-full flex-row flex-wrap mx-4 md:mx-20 lg:mx-64">
        <MessageGrid :loggedIn="loggedIn" :messages="messages"/>
    </div>
</template>
<script>
import axios from "axios";
import UserGrid from "@/components/UserGrid.vue";
import MessageGrid from "@/components/MessageGrid.vue";

export default {
    name: "AdminMessagesView",
    components: {MessageGrid},
    props: ['loggedIn'],
    data() {
        return {
            messages: [],
        };
    },
    created() {
        axios.get(`http://localhost:8000/contact`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.messages = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>

