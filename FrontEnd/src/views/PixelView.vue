<template>
    <div class="flex justify-center flex-row flex-wrap mx-28">
        <ContentGrid :contents="contents" :contentType="contentType"/>
    </div>
</template>
<script>
import axios from "axios";
import ContentGrid from "@/components/ContentGrid.vue";

export default {
    name: "PixelView",
    components: {ContentGrid},
    data() {
        return {
            contentType:"pixels",
            contents: [],
        };
    },
    created() {
        axios.get(`http://localhost:3000/pixels`, {
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