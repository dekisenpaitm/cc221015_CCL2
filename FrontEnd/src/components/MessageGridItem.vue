<template>
    <div class="w-full">
    <div class="collapse bg-base-200 my-4">
        <input type="checkbox" />
        <div class="collapse-title font-bold text-xl md:text-2xl lg:text-3xl">
              Send by: <a class="text-accent">{{ message.name }}</a> on the: <a class="text-accent">{{message.postDate}}</a>
        </div>
            <button v-on:click="deleteMessage" class="btn btn-md md:btn-md lg:btn-lg btn-accent shadow-xl">Delete Message</button>
        <div class="collapse-content text-justify text-md md:text-xl lg:text-xl">
            <img v-bind:key="message.contactID"/>
            <p>MessageID: {{ message.contactID }}</p>
            <p>UserName: {{ message.name }}</p>
            <p>E-Mail: {{ message.email }}</p>
            <p>Message: {{ message.description }}</p>
        </div>
    </div>
    </div>
    <div class="flex flex-grow w-full divider">
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "UserGridItem", // Component name

    props: ['message', 'loggedIn'], // Props received from the parent component

    methods: {
        deleteMessage: function() {
            // Send a DELETE request to delete the message
            axios.delete(`http://localhost:8000/contact/${this.message.contactID}`, {
                withCredentials: true, // Send cookies along with the request
                headers: {
                    'Content-Type': 'application/json' // Set the request content type
                }
            })
                .then(response => {
                    window.location.reload(); // Reload the page after successful deletion
                })
                .catch((error) => {
                    console.error(error); // Log any errors to the console
                });
        }
    }
};
</script>


<style>
</style>