<template>
    <div class="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" checked="checked" />
        <div class="collapse-title text-xl font-medium">
            Click to view full comment!
        </div>
        <div class="collapse-content">
            <p>CommentPosted: {{comment.commentDate}}</p>
            <p>Comment:
                {{comment.body}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommentsGridItem",
    props:['comment']
}
</script>

<style scoped>

</style>