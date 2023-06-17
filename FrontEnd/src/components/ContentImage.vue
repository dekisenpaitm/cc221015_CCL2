<template>
        <img class="mx-28" src="{{content.path}}" :alt="content.name">
        {{content.path}}
</template>

<script>
export default {
    name: "ContentImage",
    props:['content']
}
</script>

<style scoped>

</style>