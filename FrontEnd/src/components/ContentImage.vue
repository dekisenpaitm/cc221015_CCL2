<template>
        <img :src="content.path" class="mx-28 my-4">
</template>

<script>
export default {
        name: "ContentImage",
        props: ['content'],
};
</script>

<style scoped>
</style>