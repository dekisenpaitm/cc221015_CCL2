<template>
    <div class="bg-base-300 p-4 rounded-lg shadow-md my-2">
        <h3 class="text-lg font-bold mb-2">Post a Comment</h3>
        <form>
            <div class="mb-4">
                <label for="title" class="block text-sm font-bold mb-2">Title:</label>
                <input v-model="titel" type="text" id="title" name="title" placeholder="Enter the title" class="w-full bg-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-200">
            </div>
            <div class="mb-4">
                <label for="description" class="block text-sm font-bold mb-2">Description:</label>
                <textarea v-model="description" id="description" name="description" placeholder="Enter the description" class="w-full bg-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"></textarea>
            </div>
            <div class="text-right">
                <button v-on:click="postComment" type="button" class="btn-accent hover:btn-accent text-white px-4 py-2 rounded-lg">Post</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "CommentBox", // Component name

    props: ['loggedIn', 'contentType'], // Props received from the parent component

    data() {
        return {
            titel: "", // Comment title
            description: "", // Comment description
            send: "", // Flag to indicate if the comment was successfully posted
            message: "", // Message to display after posting the comment
        };
    },

    methods: {
        postComment: function () {
            let data = {
                contentID: this.$route.params.id, // ID of the content the comment belongs to
                titel: this.titel, // Title of the comment
                description: this.description, // Description of the comment
            };
            if (this.titel.trim().length !== 0 && this.description.trim().length !== 0) {
                axios
                    .post(`http://localhost:8000/comments/${this.$route.params.id}`, data, { withCredentials: true })
                    .then(response => {
                        this.send = true; // Set the flag to indicate a successful comment post
                        this.$emit('postComment', { send: true, message: 'Thank you! Your comment has been posted! :D' }); // Emit an event to notify the parent component
                        this.titel=""
                        this.description=""
                        this.refresh()

                    })
                    .catch(response => {
                        this.send = false; // Set the flag to indicate a failed comment post
                        this.$emit('postComment', { send: false, message: 'You have to be logged in to post comments! :(' }); // Emit an event to notify the parent component
                    });
            } else {
                this.$emit('postComment', { send: false, message: 'Please make sure to fill all fields! :(' }); // Emit an event to notify the parent component about empty fields
            }
        },
        refresh: function () {
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        }

    }
}
</script>
