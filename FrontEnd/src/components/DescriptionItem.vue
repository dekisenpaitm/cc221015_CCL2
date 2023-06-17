<template>
    <div class="flex-grow card bg-base-300 rounded-box place-items-center my-4">
        <div class="flex flex-wrap hero-content">
            <h1 class="text-3xl">{{ content.name }}:</h1>
            <br>
            <p>{{ content.description }}</p>
            <br>
            <p>
                <button class="btn btn-lg btn-accent" @click="redirectToExternalLink">
                    Show me more!
                </button>
            </p>
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

