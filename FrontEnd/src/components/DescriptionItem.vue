<template>
    <div class="flex w-full flex-col">
        <div class="card bg-base-300 rounded-box p-4 justify-center items-center">
            <div class="flex flex-col p-4">
                <h1 class="text-4xl font-bold text-center">{{ content.name }}:</h1>
            </div>
            <div class="text-justify text-md md:text-xl lg:text-xl">
                <p>{{ content.description }}</p>
            </div>
            <div class="my-4">
                <button class="btn btn-lg btn-accent" @click="redirectToExternalLink">
                    Show me more!
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "YourComponent",
    props: ['content'],
    methods: {
        redirectToExternalLink() {
            window.open(this.content.link, '_blank');
        },
    },
};
</script>

