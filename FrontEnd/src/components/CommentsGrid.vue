<template>
    <CommentsGridItem
            v-for="comment in comments"
            :key="comment.commentID"
            :comment="comment"/>
</template>

<script>
import CommentsGridItem from "@/components/CommentsGridItem.vue";
import axios from "axios";

export default {
    name: "CommentsGrid", // Component name

    data() {
        return {
            comments: [], // Array to store the comments
        };
    },
    components: { CommentsGridItem }, // Imported component
    created() {
        axios.get(`http://localhost:8000/comments/${this.$route.params.id}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.comments = response.data; // Store the received comments in the "comments" array
            })
            .catch((error) => {
                console.error(error); // Log any errors that occur
            });
    },
};
</script>

