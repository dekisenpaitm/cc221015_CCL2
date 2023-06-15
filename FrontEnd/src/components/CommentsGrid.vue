<template>
    <CommentsGridItem
            v-for="comment in comments"
            :key="comment.commentID"
            :comment="comment"/>
</template>

<script>
import CommentsGridItem from "@/components/CommentsGridItem.vue";
export default {
    name: "CommentsGrid",
    props: ['comments'],
    components: { CommentsGridItem },
};
</script>
