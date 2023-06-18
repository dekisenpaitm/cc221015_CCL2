<template>
    <div style="width:70vw; " class="carousel w-full object-fill">
        <div id="item1" class="carousel-item w-full relative">
            <h1 class="flex-grow hero-content card bg-base-300 rounded-box place-items-center absolute bottom-4 left-4 bg-base-300 text-3xl">Project:Soul</h1>
            <img src="/games/projectsoul.png" class="w-full">
            <router-link to="/games"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-accent absolute bottom-4 right-4">Find out more!</button></router-link>
        </div>
        <div id="item2" class="carousel-item w-full relative">
            <h1 class="flex-grow hero-content card bg-base-300 rounded-box place-items-center absolute bottom-4 left-4 bg-base-300 text-3xl">Dekis Dungeon Slayer</h1>
            <img src="/games/dekisdungeon.png" class="w-full">
            <router-link to="/games"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-accent absolute bottom-4 right-4">Find out more!</button></router-link>
        </div>
        <div id="item3" class="carousel-item w-full relative">
            <h1 class="flex-grow hero-content card bg-base-300 rounded-box place-items-center absolute bottom-4 left-4 bg-base-300 text-3xl">Server-Side-Coding: Project</h1>
            <img src="/uiux/ssc.png" class="w-full">
            <router-link to="/uiux"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-accent absolute bottom-4 right-4">Find out more!</button></router-link>
        </div>
        <div id="item4" class="carousel-item w-full relative">
            <h1 class="flex-grow hero-content card bg-base-300 rounded-box place-items-center absolute bottom-4 left-4 bg-base-300 text-3xl">Responsive Design: Project</h1>
            <img src="/uiux/fwoc.png" class="w-full">
            <router-link to="/uiux"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-accent absolute bottom-4 right-4">Find out more!</button></router-link>
        </div>
    </div>
    <div class="flex justify-center w-full gap-2 my-4">
        <a href="#item1" class="btn btn-xs">1</a>
        <a href="#item2" class="btn btn-xs">2</a>
        <a href="#item3" class="btn btn-xs">3</a>
        <a href="#item4" class="btn btn-xs">4</a>
    </div>
</template>

<script>
import CarouselGridItem from "@/components/CarouselGridItem.vue";

export default {
    name: "CarouselGrid",
    components: {CarouselGridItem},
    data(){
        return{
            content:[
                {
                    title:"Project:Soul",
                    path:"/games/projectsoul.png"
                },
                {
                    title:"Dekis Dungeon Slayer",
                    path:"/games/dekisdungeon.png"
                },
                {
                    title:"SSC: Project",
                    path:"/uiux/ssc.png"
                },
                {
                    title:"RDP: Project",
                    path:"/uiux/fwoc.png"
                }
            ],
        }
    },
}

</script>

<style scoped>

</style>