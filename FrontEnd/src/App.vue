<template>
    <div class="min-h-screen flex flex-col">
        <ResponsiveNavbar :loggedIn="loggedIn" class="sticky top-0 z-50" />
        <div class="flex flex-grow">
            <RouterView :loggedIn="loggedIn" />
        </div>
        <Footer class="inset-x-0 bottom-0" />
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import ResponsiveNavbar from "@/components/ResponsiveNavbar.vue";

const loggedIn = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/', {withCredentials: true});
         loggedIn.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>

<style>
</style>