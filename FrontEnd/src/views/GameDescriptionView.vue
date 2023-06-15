<template>
    <CommentsGrid :comments="comments"/>
</template>

<script>
import axios from "axios";
import CommentsGrid from "@/components/CommentsGrid.vue";

export default {
    name: "GameDescriptionView",
    components: {CommentsGrid},
    props:['loggedIn'],
    data() {
        return {
            game:{},
            comments:[]
        };
    },
    created() {
        axios.get(`http://localhost:3000/games/${this.$route.params.id}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                this.game = response.data;

            })
            .catch((error) => {
                console.error(error);
            });

        axios.get(`http://localhost:3000/games/${this.$route.params.id}/comments`, {
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

};
</script>

<style scoped>

</style>