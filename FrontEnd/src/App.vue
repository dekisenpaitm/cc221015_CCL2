<template>
    <div class="min-h-screen flex flex-col">
        <ResponsiveNavbar :loggedIn="loggedIn" class="sticky top-0 z-50 w-full" />
        <div class="flex flex-grow justify-center">
            <RouterView :loggedIn="loggedIn" />
        </div>
        <Footer class="inset-x-0 bottom-0" />
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
import Footer from "@/components/Footer.vue";
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