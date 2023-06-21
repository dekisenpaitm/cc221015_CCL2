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
    components: { CommentBox, ContentGridItem, ContentGrid }, // Import and use the necessary components
    data() {
        return {
            contentType: "games", // Set the content type
            contents: [], // Initialize an empty array to store the game contents
        };
    },
    created() {
        axios.get(`http://localhost:8000/games`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.contents = response.data; // Assign the retrieved game contents to the "contents" data property
            })
            .catch((error) => {
                console.error(error); // Log any errors that occur during the API request
            });
    },
};
</script>
