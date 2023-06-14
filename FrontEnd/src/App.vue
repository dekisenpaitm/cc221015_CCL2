<template>
    <div class="flex flex-col">
        <NavBar :cookie="cookie" class="sticky top-0 z-50"/>

        <div class="flex-grow min-h-screen">
            <RouterView :cookie="cookie"/>
        </div>
        <Footer :cookie="cookie"/>

    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
import {RouterView} from 'vue-router'
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";

const cookie = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/', {withCredentials: true});
        cookie.value = response.data;
        console.log(cookie.value);
    } catch (error) {
        console.error(error);
    }
});
</script>

<style>
</style>