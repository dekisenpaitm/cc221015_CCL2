<template>
        <div class="flex items-center justify-center">
        <img style="width:70vw; border-radius:1%" :src="content.path" class="mx-28 my-4" alt="content picture">
        </div>
</template>

<script>
export default {
        name: "ContentImage",
        props: ['content'],
};
</script>

<style scoped>
</style>