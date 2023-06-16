<template>
    <ContentGridItem
                  v-for="content in contents"
                  :key="content.contentID"
                  :content="content"
                  :contentType="contentType"
    />
</template>

<script>
import ContentGridItem from "@/components/ContentGridItem.vue";
export default {
    name: "ContentGrid",
    props: ['contents', 'contentType'],
    components: { ContentGridItem },
};
</script>

<style>
</style>
