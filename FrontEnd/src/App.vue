<template>
    <div class="flex flex-col">
        <NavBar :loggedIn="loggedIn" class="sticky top-0 z-50"/>

        <div class="flex-grow min-h-screen">
            <RouterView :loggedIn="loggedIn"/>
        </div>
        <Footer />

    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";

const loggedIn = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/', {withCredentials: true});
         loggedIn.value = response.data;
        console.log(loggedIn.value);
    } catch (error) {
        console.error(error);
    }
});
</script>

<style>
</style>