<template>
    <ContentGridItem
                  v-for="content in contents"
                  :key="content.contentID"
                  :content="content"/>
</template>

<script>
import ContentGridItem from "@/components/ContentGridItem.vue";
export default {
    name: "ContentGrid",
    props: ['contents'],
    components: { ContentGridItem },
};
</script>

<style>
</style>
