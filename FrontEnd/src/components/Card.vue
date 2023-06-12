<template>
    <div class="card max-width lg:card-side bg-base-300 shadow-xl">
        <figure><img src="../assets/Backstory_1.png"></figure>
        <div class="card-body" v-if="product">
            <h2 class="card-title">UserName: {{product[0].name}}</h2>
            <br>
            <p>UserID: {{ product[0].userID }}</p>
            <p>Password: {{ product[0].password }}</p>
            <p>E-Mail: {{ product[0].email }}</p>
            <p>Role: {{ product[0].role }}</p>

            <div class="card-actions justify-end">
                <button class="btn btn-primary">Play Now</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";

const product = ref();

onMounted(()=>{
    axios.get('http://localhost:8000/')
        .then((response) => {
            product.value = response.data;
            console.log(product.value)
        })
        .catch((error) => {
            console.error(error);
        });
});

</script>

<style scoped>

</style>