<template>
    <div class="flex w-full flex-col my-4">
        <div class="card bg-base-300 rounded-box p-4 justify-center items-center">
            <div class="flex flex-col p-4">
                <h1 class="text-4xl font-bold text-center">{{title}}</h1>
                <br>
                <div v-for="p in body">
                    <p class="text-justify text-md md:text-xl lg:text-xl">
                      {{p.p}}
                    </p>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TextBoxItem",
    props:['title','body']
}
</script>

<style scoped>

</style>
<script setup>
</script>