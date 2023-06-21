<template>
    <div class="w-full">
    <div class="bg-base-300 p-4 rounded-lg shadow-xl my-4">
        <form class="w-full">
            <div class="mb-4">
                <label for="title" class="block text-md md:text-xl lg:text-xl font-bold mb-2">Your Name:</label>
                <input v-model="name" type="text" id="name" name="name" placeholder="Enter your name" class="w-full bg-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-200">
            </div>
            <div class="mb-4">
                <label for="title" class="block text-md md:text-xl lg:text-xl font-bold mb-2">Your E-Mail:</label>
                <input v-model="email" type="text" id="email" name="email" placeholder="Enter your email address" class="w-full bg-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-200">
            </div>
            <div class="mb-4">
                <label for="title" class="block text-md md:text-xl lg:text-xl font-bold mb-2">Title:</label>
                <input v-model="titel" type="text" id="title" name="title" placeholder="Enter a title" class="w-full bg-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-200">
            </div>
            <div class="mb-4">
                <label for="description" class="block text-md md:text-xl lg:text-xl font-bold mb-2">Description:</label>
                <textarea v-model="description" id="description" name="description" placeholder="Enter your message here" class="w-full bg-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500">
                </textarea>
            </div>
            <div class="text-right">
                <button v-on:click="sendMessage" type="button" class="btn-wide btn-accent hover:btn-accent text-white text-md md:text-xl lg:text-xl px-4 py-2 rounded-lg">Send Message</button>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
import axios from "axios";
import PopUpItem from "@/components/PopUpItem.vue";
import AlertItem from "@/components/AlertItem.vue";

export default {
    name: "ContactBox", // Component name

    components: {AlertItem, PopUpItem}, // Imported components

    data() {
        return {
            name: "", // Variable to store the name input value
            email: "", // Variable to store the email input value
            titel: "", // Variable to store the title input value
            description: "", // Variable to store the description input value
            message: "", // Variable to store the message
            send: "", // Variable to track the message sending status
        };
    },

    methods: {
        sendMessage: function () {
            let data = {
                name: this.name, // Get the name input value
                email: this.name, // Get the email input value (Note: Should this be "email: this.email" instead of "email: this.name"?)
                titel: this.titel, // Get the title input value
                description: this.description, // Get the description input value
            };

            if (data.name !== "" && data.email !== "" && data.titel !== "" && data.description !== "") {
                // Check if all fields are filled

                axios.post(`http://localhost:8000/contact`, data, {withCredentials: true}); // Send a POST request to send the message

                this.send = true; // Set the send status to true
                this.$emit('sendMessage', {send: true, message: 'Thank you for the message! <3'}); // Emit an event to notify the parent component
                this.name = ""; // Reset the name input value
                this.email = ""; // Reset the email input value
                this.titel = ""; // Reset the title input value
                this.description = ""; // Reset the description input value
            } else {
                this.send = false; // Set the send status to false
                this.$emit('sendMessage', {send: false, message: 'Make sure to fill all fields! :('}); // Emit an event to notify the parent component
            }
        },
    }
}
</script>

<style></style>