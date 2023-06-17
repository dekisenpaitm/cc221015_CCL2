<template>
    <div class="flex-grow card bg-base-300 rounded-box place-items-center my-4">
        <div class="flex flex-wrap hero-content">
            <div class="my-2">
            <h1 class="text-3xl">{{ content.name }}:</h1>
            </div>
            <div class="hero my-2">
            <p>{{ content.description }}</p>
            </div>
            <div class="my-2">
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

