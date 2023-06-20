<template>
    <div class="divider">
        <div class="rating">
            <div class="hero-content">
                <a v-if="userLike.length > 0">
                    <input v-on:click="dislikeContent" type="radio" name="rating-3"
                           class="p-2 md:p-4 lg:p-6 mask mask-heart bg-red-500"/>
                </a>
                <a v-else>
                    <input v-on:click="likeContent" type="radio" name="rating-3"
                           class="p-2 md:p-4 lg:p-6 mask mask-heart bg-gray-700"/>
                </a>
                <p class="font-bold text-xl md:text-2xl lg:text-3xl">{{ allLikes.length }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import PopUpItem from "@/components/PopUpItem.vue";
import AlertItem from "@/components/AlertItem.vue";

export default {
    name: "Heart",
    components: {AlertItem, PopUpItem},
    data() {
        return {
            allLikes: [],
            userLike: {},
        };
    },
    created() {
        this.getUserLikes();
        this.getAllLikes();
    },
    methods: {
        likeContent() {
            axios
                .post(`http://localhost:8000/likes/${this.$route.params.id}`, {}, {withCredentials: true})
                .then(() => {
                    this.getUserLikes();
                    this.getAllLikes();
                })
                .catch(() => {
                    this.$emit('likeContent', {send: false, message: 'You must be logged in to like content! :('});
                });
        },

        dislikeContent() {
            axios
                .delete(`http://localhost:8000/likes/${this.$route.params.id}/delete`, {withCredentials: true})
                .then(() => {
                    this.getUserLikes();
                    this.getAllLikes();
                });
        },

        getUserLikes() {
            axios
                .get(`http://localhost:8000/likes/${this.$route.params.id}`, {withCredentials: true})
                .then((response) => {
                    this.userLike = response.data;
                });
        },
        getAllLikes() {
            axios
                .get(`http://localhost:8000/likes/${this.$route.params.id}/all`, {withCredentials: true})
                .then((response) => {
                    this.allLikes = response.data;
                });
        },
    },
};
</script>

<style scoped>

</style>
