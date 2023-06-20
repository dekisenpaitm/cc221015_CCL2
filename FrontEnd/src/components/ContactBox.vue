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
    name: "ContactBox",
    components: {AlertItem, PopUpItem},
    data(){
        return{
            name:"",
            email:"",
            titel:"",
            description: "",
            message:"",
            send:"",
        }
    },
    methods: {
        sendMessage: function () {
            let data = {
                name: this.name,
                email: this.name,
                titel: this.titel,
                description: this.description,
            }
            if (data.name !== "" && data.email !== "" && data.titel !== "" && data.description !== "") {
                axios.post(`http://localhost:8000/contact`, data, {withCredentials: true})
                this.send = true;
                this.$emit('sendMessage', {send: true, message: 'Thank you for the message! <3'});
                this.name = "";
                this.email = "";
                this.titel = "";
                this.description = "";
            } else {
                this.send = false;
                this.$emit('sendMessage', {send: false, message: 'Make sure to fill all fields! :('});
            }
        },
    }
}
</script>
<style></style>