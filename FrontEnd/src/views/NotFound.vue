<template>
    <div class="hero">
        <div class="hero-content flex-col">
            <div class="flex text-4xl font-bold text-center"><p>You got lost? No problem got the right link for you ;)</p></div>
            <br>
            <div class="flex"><router-link to="/"><button class="btn btn-md md:btn-md lg:btn-lg btn-accent shadow-xl">Back to Homepage</button></router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

<style scoped>

</style>