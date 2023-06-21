<template>
    <div class="fixed hidden w-full top-0 left-0 z-50">
        <a v-if="send === true"><PopUpItem :message="message" /></a>
        <a v-else><AlertItem :message="message" /></a>
    </div>
    <div class="min-h-screen flex flex-col">
        <ResponsiveNavbar :loggedIn="loggedIn" class="sticky top-0 z-40 w-full" />
        <div class="flex flex-grow justify-center items-center">
                <RouterView :loggedIn="loggedIn"
                        @likeContent="updateData"
                        @createUser="updateData"
                        @loginUser="updateData"
                        @postComment="updateData"
                        @editUser="updateData"
                        @sendMessage="updateData"/>
        </div>
        <Footer class="inset-x-0 bottom-0" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Footer from "@/components/Footer.vue";
import ResponsiveNavbar from "@/components/ResponsiveNavbar.vue";
import PopUpItem from "@/components/PopUpItem.vue";
import AlertItem from "@/components/AlertItem.vue";

// Reactive variables
const loggedIn = ref(null);
const send = ref(false);
const message = ref('');

// Function to update data based on received data
function updateData(data) {
    send.value = data.send;
    message.value = data.message;
    openAlert();
}

// Fetch user data on component mount
onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:8000/', { withCredentials: true });
        loggedIn.value = response.data;
    } catch (error) {
        console.error(error);
    }
});

// Function to close the alert container
function closeAlert() {
    const alertContainer = document.querySelector('.fixed');
    alertContainer.classList.add('hidden');
}

// Function to open the alert container and close it after 3 seconds
function openAlert() {
    const alertContainer = document.querySelector('.fixed');
    alertContainer.classList.remove('hidden');
    setTimeout(closeAlert, 3000);
}
</script>


<style>
</style>