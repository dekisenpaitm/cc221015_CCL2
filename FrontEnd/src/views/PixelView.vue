<template>
    <div class="flex flex-row flex-wrap md:mx-56 xl:mx-64">
        <ContentGrid :contents="contents" :contentType="contentType"/>
    </div>
</template>
<script>
import axios from "axios";
import ContentGrid from "@/components/ContentGrid.vue";

export default {
    name: "PixelView",
    components: { ContentGrid }, // Import and use the ContentGrid component
    data() {
        return {
            contentType: "pixels",
            contents: [],
        };
    },
    created() {
        axios.get(`http://localhost:8000/pixels`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.contents = response.data; // Set the contents data with the response data
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>
