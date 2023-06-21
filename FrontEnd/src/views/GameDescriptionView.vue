<template>
    <div class="flex w-full flex-grow items-center justify-center mx-4 md:mx-20 lg:mx-64 my-4">
        <div class="w-full flex flex-col">
            <ContentImage :content="game"/>
            <Heart @likeContent="handleContent" :loggedIn="loggedIn"/>
            <DescriptionItem :content="game"/>
            <div class="flex flex-grow w-full divider"></div>
            <CommentBox :contentType="contentType" :loggedIn="loggedIn" @postComment="handleContent"/>
            <div class="flex flex-grow w-full divider"></div>
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
    components: { DescriptionItem, ContentImage, Heart, CommentBox, CommentsGrid }, // Import and use the necessary components
    props: ['loggedIn'],
    data() {
        return {
            contentType: "games", // Set the content type
            game: {}, // Initialize an empty object to store the game details
        };
    },
    created() {
        axios.get(`http://localhost:8000/games/${this.$route.params.id}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.game = response.data; // Assign the retrieved game details to the "game" data property
            })
            .catch((error) => {
                console.error(error); // Log any errors that occur during the API request
            });

    },
    methods: {
        handleContent: function handleContent(data) {
            this.$emit('likeContent', data); // Emit an event to handle liking the content
        },
    }
}
</script>
