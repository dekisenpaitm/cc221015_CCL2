<template>
    <div class="card lg:card-side bg-base-300 shadow-xl w-full my-4">
        <figure class="w-full"><img :src="content.path" :alt="content.title" class="w-full h-auto max-h-120 object-fill"/></figure>
        <div class="card-body">
            <h2 class="card-title">{{content.title}}</h2>
            <p>To find out more about this project click the button below!</p>
            <div class="card-actions justify-end">
                <button class="btn btn-accent">More!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CarouselGridItem",
    props:['content']
}
</script>

<style scoped>

</style>