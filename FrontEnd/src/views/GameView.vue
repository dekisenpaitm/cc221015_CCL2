<template>
    <div class="flex justify-center flex-row flex-wrap md:mx-20 lg:mx-64">
        <ContentGrid :contents="contents" :contentType="contentType"/>
    </div>
</template>
<script>
import axios from "axios";
import ContentGrid from "@/components/ContentGrid.vue";
import ContentGridItem from "@/components/ContentGridItem.vue";
import CommentBox from "@/components/CommentBox.vue";

export default {
    name: "GameView",
    components: {CommentBox, ContentGridItem, ContentGrid},
    data() {
        return {
            contentType: "games",
            contents: [],
        };
    },
    created() {
        axios.get(`http://localhost:3000/games`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.contents = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>