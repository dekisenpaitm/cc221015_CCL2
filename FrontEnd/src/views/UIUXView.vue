<template>
    <div class="mx-56 my-8">
        <ContentGrid :contents="contents"/>
    </div>
</template>
<script>
import axios from "axios";
import ContentGrid from "@/components/ContentGrid.vue";

export default {
    name: "UIUXView",
    components: {ContentGrid},
    data() {
        return {
            contents: [],
        };
    },
    created() {
        axios.get(`http://localhost:3000/uiuxs`, {
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