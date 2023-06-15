<template>
    <div class="flex flex-row flex-wrap">
        <ContentGrid :contents="contents"/>
    </div>
</template>
<script>
import axios from "axios";
import ContentGrid from "@/components/ContentGrid.vue";
import ContentGridItem from "@/components/ContentGridItem.vue";

export default {
    name: "GameView",
    components: {ContentGridItem, ContentGrid},
    data() {
        return {
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
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    },
};
</script>