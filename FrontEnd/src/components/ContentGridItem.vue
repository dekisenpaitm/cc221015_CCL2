<template>
    <div class="flex w-full">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="../images/{{content.path}}" alt="content-image" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{{content.name}}</h2>
                    <p>{{content.description}}</p>
                    <div class="card-actions">
                        <button class="btn btn-accent">More!</button>
                    </div>
                </div>
            </div>
    </div>
    <div class="divider divider-horizontal"></div>

</template>

<script>
export default {
    name: "ContentGridItem",
    props:['content']
}
</script>

<style scoped>

</style>