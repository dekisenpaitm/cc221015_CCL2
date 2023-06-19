<template>
    <div class="flex justify-center flex-row flex-wrap md:mx-20 lg:mx-64">
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
        axios.get(`http://localhost:8000/pixels`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.contents = response.data;
                console.log(this.contents)
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>