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
    name: "CommentsGrid",
    data(){
        return{
            comments:[],
        }
    },
    components: { CommentsGridItem },
    created(){
        axios.get(`http://localhost:8000/comments/${this.$route.params.id}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.comments = response.data;

            })
            .catch((error) => {
                console.error(error);
            });
    }
};
</script>
