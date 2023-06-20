<template>
    <div style="width:70vw; border-radius:3%" class="carousel shadow-xl object-fill">
        <div id="item1" class="carousel-item w-full relative">
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute bottom-4 left-4 shadow-xl" >Project:Soul</button>
            <img src="/games/projectsoul.png" class="w-full">
            <router-link to="/games"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-accent absolute bottom-4 right-4 shadow-xl">Find out more!</button></router-link>
        </div>
        <div id="item2" class="carousel-item w-full relative">
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute bottom-4 left-4 shadow-xl">Dekis Dungeon</button>
            <img src="/games/dekisdungeon.png" class="w-full">
            <router-link to="/games"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-accent absolute bottom-4 right-4 shadow-xl">Find out more!</button></router-link>
        </div>
        <div id="item3" class="carousel-item w-full relative">
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute bottom-4 left-4 shadow-xl">SSC: Online TCG</button>
            <img src="/uiux/ssc.png" class="w-full">
            <router-link to="/uiux"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-accent absolute bottom-4 right-4 shadow-xl">Find out more!</button></router-link>
        </div>
        <div id="item4" class="carousel-item w-full relative">
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute bottom-4 left-4 shadow-xl">RDP: Banking App</button>
            <img src="/uiux/fwoc.png" class="w-full">
            <router-link to="/uiux"><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-accent absolute bottom-4 right-4 shadow-xl">Find out more!</button></router-link>
        </div>
    </div>
    <div class="flex justify-center w-full gap-2 my-4">
        <a href="#item1" type="button" class="btn btn-sm shadow-xl bg-base-300">1</a>
        <a href="#item2" type="button" class="btn btn-sm shadow-xl bg-base-300">2</a>
        <a href="#item3" type="button" class="btn btn-sm shadow-xl bg-base-300">3</a>
        <a href="#item4" type="button" class="btn btn-sm shadow-xl bg-base-300">4</a>
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