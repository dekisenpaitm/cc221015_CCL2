<template>
    <div class="divider">
        <div class="rating">
            <div class="hero-content">
                <a v-if="userLike.length > 0">
                    <input v-on:click="dislikeContent" type="radio" name="rating-3"
                           class="p-2 md:p-4 lg:p-6 mask mask-heart bg-red-500"/>
                </a>
                <a v-else>
                    <input v-on:click="likeContent" type="radio" name="rating-3"
                           class="p-2 md:p-4 lg:p-6 mask mask-heart bg-gray-700"/>
                </a>
                <p class="font-bold text-xl md:text-2xl lg:text-3xl">{{ allLikes.length }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import PopUpItem from "@/components/PopUpItem.vue";
import AlertItem from "@/components/AlertItem.vue";

export default {
    name: "Heart", // Component name

    components: {AlertItem, PopUpItem}, // Imported components

    data() {
        return {
            allLikes: [], // Array to store all likes
            userLike: {}, // Object to store the user's like
        };
    },

    created() {
        this.getUserLikes(); // Get the user's like
        this.getAllLikes(); // Get all likes for the content
    },

    methods: {
        likeContent() {
            // Send a POST request to like the content
            axios
                .post(`http://localhost:8000/likes/${this.$route.params.id}`, {}, {withCredentials: true})
                .then(() => {
                    this.getUserLikes(); // Refresh the user's like
                    this.getAllLikes(); // Refresh all likes for the content
                })
                .catch(() => {
                    // If the request fails, emit an event to notify the parent component
                    this.$emit('likeContent', {send: false, message: 'You must be logged in to like content! :('});
                });
        },

        dislikeContent() {
            // Send a DELETE request to dislike the content
            axios
                .delete(`http://localhost:8000/likes/${this.$route.params.id}/delete`, {withCredentials: true})
                .then(() => {
                    this.getUserLikes(); // Refresh the user's like
                    this.getAllLikes(); // Refresh all likes for the content
                });
        },

        getUserLikes() {
            // Get the user's like for the content
            axios
                .get(`http://localhost:8000/likes/${this.$route.params.id}`, {withCredentials: true})
                .then((response) => {
                    this.userLike = response.data; // Store the user's like
                });
        },

        getAllLikes() {
            // Get all likes for the content
            axios
                .get(`http://localhost:8000/likes/${this.$route.params.id}/all`, {withCredentials: true})
                .then((response) => {
                    this.allLikes = response.data; // Store all likes
                });
        },
    },
};
</script>
