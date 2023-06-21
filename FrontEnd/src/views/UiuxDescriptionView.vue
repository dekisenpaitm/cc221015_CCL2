<template>
    <div class="flex w-full flex-grow items-center justify-center mx-4 md:mx-20 lg:mx-64 my-4">
        <div class="w-full flex flex-col">
            <ContentImage :content="uiux"/>
            <Heart @likeContent="handleContent" :loggedIn="loggedIn"/>
            <DescriptionItem :content="uiux"/>
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
    name: "uiuxDescriptionView",
    components: {
        DescriptionItem,
        ContentImage,
        Heart,
        CommentBox,
        CommentsGrid
    }, // Import and use the necessary components
    props: ['loggedIn'], // Receive the 'loggedIn' prop
    data() {
        return {
            contentType: "uiuxs", // Specify the content type as "uiuxs"
            uiux: {}, // Holds the UI/UX content
            comments: [] // Holds the comments for the UI/UX content
        };
    },
    created() {
        // Fetch the UI/UX content on component creation
        axios.get(`http://localhost:8000/uiuxs/${this.$route.params.id}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.uiux = response.data; // Assign the fetched UI/UX content to the 'uiux' variable
            })
            .catch((error) => {
                console.error(error);
            });

        // Fetch the comments for the UI/UX content on component creation
        axios.get(`http://localhost:8000/${this.$route.params.id}/comments`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.comments = response.data; // Assign the fetched comments to the 'comments' variable
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
};
</script>


<style scoped>

</style>