<template>
    <div class="flex w-full flex-grow items-center justify-center mx-4 md:mx-20 lg:mx-64 my-4">
        <div class="w-full flex flex-col">
            <ContentImage :content="pixel"/>
            <Heart @likeContent="handleContent" :loggedIn="loggedIn"/>
            <DescriptionItem :content="pixel"/>
            <div class="flex flex-grow w-full divider"></div>
            <CommentBox :contentType="contentType" :loggedIn="loggedIn" @postComment="handleContent"/>
            <div class="flex flex-grow w-full divider"></div>
            <CommentsGrid/>
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
    name: "PixelDescriptionView",
    components: { DescriptionItem, ContentImage, Heart, CommentBox, CommentsGrid }, // Import and use the necessary components
    props: ['loggedIn'], // Declare the loggedIn prop
    data() {
        return {
            contentType: "pixels",
            pixel: {}, // Store the pixel data
            comments: [] // Store the comments data
        };
    },
    created() {
        axios.get(`http://localhost:8000/pixels/${this.$route.params.id}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.pixel = response.data; // Set the pixel data with the response data
            })
            .catch((error) => {
                console.error(error);
            });

        axios.get(`http://localhost:8000/${this.$route.params.id}/comments`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.comments = response.data; // Set the comments data with the response data
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        handleContent: function handleContent(data) {
            this.$emit('likeContent', data); // Emit the 'likeContent' event with the provided data
        },
    }
}
</script>


<style scoped>

</style>