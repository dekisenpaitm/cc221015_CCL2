<template>
    <div class="bg-base-300 p-4 rounded-lg shadow-md my-4">
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
                <button v-on:click="postComment" type="submit" class="btn-accent hover:btn-accent text-white px-4 py-2 rounded-lg">Post</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "CommentBox",
    props:['loggedIn', 'contentType'],
    data(){
        return{
            titel:"",
            description: "",
        }
    },
    methods: {
        postComment: function () {
            let data = {
                contentID: this.$route.params.id,
                titel: this.titel,
                description: this.description,
            }
            axios.post(`http://localhost:3000/${this.contentType}/${this.$route.params.id}/comments`, data, {withCredentials: true})
        }
    }
}
</script>

<style scoped>

</style>