<template>
    <div class="flex flex-grow flex-col flex-wrap mx-28">
        <CommentBox :loggedIn="loggedIn" :contentType="contentType"/>
    <CommentsGrid/>
    </div>
</template>

<script>
import axios from "axios";
import CommentsGrid from "@/components/CommentsGrid.vue";
import CommentBox from "@/components/CommentBox.vue";

export default {
    name: "GameDescriptionView",
    components: {CommentBox, CommentsGrid},
    props: ['loggedIn'],
    data() {
        return {
            contentType: "games",
            game: {},
        };
    },
    created() {
        axios.get(`http://localhost:3000/games/${this.$route.params.id}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.game = response.data;

            })
            .catch((error) => {
                console.error(error);
            });

    }
}
</script>

<style scoped>

</style>