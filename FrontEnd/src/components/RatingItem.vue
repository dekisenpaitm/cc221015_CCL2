<template>
    <div class="flex w-full h-16 md:h-24 lg:h-32 card bg-base-300 rounded-box justify-center my-4 px-4">
        <div class="rating rating-xs md:rating-md lg:rating-lg gap-1">
            <div class="flex-initial w-16 md:w-20 lg:w-28 font-bold text-xs md:text-xl lg:text-3xl mx-4">
                {{ skillName }}
            </div>
            <div class="divider-horizontal font-bold text-xs md:text-xl lg:text-3xl">:</div>
            <div class="flex tab-disabled pointer-events-none">
                <div v-for="n in ratingNr">
                    <input tabindex="-1" :name="ratingNr" class="flex-none mask mask-star-2 bg-yellow-300 w-full pointer-events-none"/>
                </div>
                <div v-for="n in missingNr">
                    <input tabindex="-1" :name="missingNr" class="flex-none mask mask-star-2 bg-base-100 w-full pointer-events-none"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RatingItem",
    props: ['ratingNr', 'missingNr', 'skillName']
}
</script>

<style scoped>

</style>