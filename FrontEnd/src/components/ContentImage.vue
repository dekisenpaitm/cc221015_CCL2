<template>
        <div class="flex items-center justify-center">
        <img style="width:70vw;" :src="content.path" class="mx-28 my-4">
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