<template>
    <div class="flex w-full flex-grow items-center justify-center mx-28">
        <div class="w-full flex flex-col">
        <ContentImage :content="game"/>
        <Heart :loggedIn="loggedIn" />
        <DescriptionItem :content="game"/>
        <CommentBox :loggedIn="loggedIn" :contentType="contentType" />
        <CommentsGrid />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import CommentsGrid from "@/components/CommentsGrid.vue";
import CommentBox from "@/components/CommentBox.vue";
import Heart from "@/components/Heart.vue";
import ContentImage from "@/components/ContentImage.vue";
import DescriptionItem from "@/components/DescriptionItem.vue";

export default {
    name: "GameDescriptionView",
    components: {DescriptionItem, ContentImage, Heart, CommentBox, CommentsGrid},
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
                console.log(response.data)

            })
            .catch((error) => {
                console.error(error);
            });

    }
}
</script>

<style scoped>

</style>