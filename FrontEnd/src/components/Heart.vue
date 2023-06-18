<template>
    <div class="divider">
        <div className="rating">
            <div class="hero-content">
                <a v-if="userLike.length > 0">
                    <input v-on:click="dislikeContent" type="radio" name="rating-3" className="p-2 md:p-4 lg:p-6 mask mask-heart bg-red-500"/>
                </a>
                <a v-else>
                    <input v-on:click="likeContent" type="radio" name="rating-3" className="p-2 md:p-4 lg:p-6 mask mask-heart bg-gray-700"/>
                </a>
                <p class="font-bold text-xl md:text-2xl lg:text-3xl ">{{ allLikes.length }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Heart",
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
        likeContent: function () {
            axios
                .post(`http://localhost:3000/likes/${this.$route.params.id}`, {}, {withCredentials: true})
                .then(() => {
                    this.getUserLikes();
                    this.getAllLikes();
                });
        },

        dislikeContent: function () {
            axios
                .delete(`http://localhost:3000/likes/${this.$route.params.id}/delete`, {withCredentials: true})
                .then(() => {
                    this.getUserLikes();
                    this.getAllLikes();
                });
        },

        getUserLikes: function () {
            axios
                .get(`http://localhost:3000/likes/${this.$route.params.id}`, {withCredentials: true})
                .then((response) => {
                    this.userLike = response.data;
                    console.log(this.userLike);
                });
        },
        getAllLikes: function () {
            axios
                .get(`http://localhost:3000/likes/${this.$route.params.id}/all`, {withCredentials: true})
                .then((response) => {
                    this.allLikes = response.data;
                });
        },
    },
};
</script>

<style scoped>

</style>
