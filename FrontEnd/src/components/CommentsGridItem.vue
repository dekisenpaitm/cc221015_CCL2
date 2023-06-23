<template>
    <div>
    <div class="collapse bg-base-300 my-4">
        <input type="radio" :name="key" checked="checked" />
        <div class="collapse-title text-xl font-medium">
            {{comment.commentTitel}} by {{comment.commentUserName}}
        </div>

        <div class="collapse-content">
            <p>CommentPosted: {{comment.commentDate}}</p>
            <br>
            <p>Comment:
                {{comment.body}}</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "CommentsGridItem",
    props:['comment', 'key']
}
</script>
