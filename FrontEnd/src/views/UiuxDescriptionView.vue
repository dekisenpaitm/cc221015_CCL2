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
    components: {DescriptionItem, ContentImage, Heart, CommentBox, CommentsGrid},
    props:['loggedIn'],
    data() {
        return {
            contentType:"uiuxs",
            uiux:{},
            comments:[]
        };
    },
    created() {
        axios.get(`http://localhost:8000/uiuxs/${this.$route.params.id}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.uiux = response.data;

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
                this.comments = response.data;

            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        handleContent: function handleContent(data) {
            this.$emit('likeContent', data);
        },
    }

};
</script>

<style scoped>

</style>