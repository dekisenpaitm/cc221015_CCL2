<template>
    <div class="flex justify-center flex-row flex-wrap md:mx-20 lg:mx-64">
    <ContentGrid :contents="contents" :contentType="contentType"/>
    </div>
</template>
<script>
import axios from "axios";
import ContentGrid from "@/components/ContentGrid.vue";

export default {
    name: "UIUXView",
    components: { ContentGrid }, // Import and use the ContentGrid component
    data() {
        return {
            contentType: "uiuxs", // Specify the content type as "uiuxs"
            contents: [], // Holds the list of UI/UX content
        };
    },
    created() {
        // Fetch the UI/UX content on component creation
        axios.get(`http://localhost:8000/uiuxs`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.contents = response.data; // Assign the fetched UI/UX content to the 'contents' variable
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>
