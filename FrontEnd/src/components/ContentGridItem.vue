<template>
    <div class="">
            <div class="card w-80 bg-base-300 shadow-xl mx-4 my-4">
                <figure class="px-10 pt-10">
                    <img :src="content.path" alt="content-image" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{{content.name}}</h2>
                    <p></p>
                    <router-link :to="`${contentType}/`+ content.contentID"><div class="card-actions">
                        <button class="btn btn-accent">More!</button>
                    </div></router-link>
                </div>
            </div>
    </div>
    <br>

</template>

<script>
export default {
    name: "ContentGridItem",
    props:['content', 'contentType']
}
</script>

<style scoped>

</style>