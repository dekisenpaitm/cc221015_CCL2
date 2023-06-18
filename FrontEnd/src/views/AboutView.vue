<template>
    <div class="flex flex-col w-full mx-16 md:mx-20 lg:mx-28">
        <div class="flex card bg-base-300 rounded-box my-4 mx-2 items-center">
            <p class="hero-content text-justify text-3xl">
                About me!
            </p>
            <p class="hero-content text-justify text-xs md:text-xl lg:text-xl">
                My name is Dejan Kovacevic, and I'm a 32-year-old student currently studying at FH St.Pölten in Austria. I am pursuing a study course in BCC (Bachelor's in Computer Science).
                I've worked in different fields and collected a variety of skills throughout my journey. Around 1 1/2 year ago I discovered coding by chance and it turned out to be my biggest
                passion in life.
            </p>
            <p class="hero-content text-justify text-xs md:text-xl lg:text-xl">
                In addition to my academic pursuits, I am passionate about various hobbies. One of my main interests is Game Development, where I enjoy utilizing tools like Unity and programming languages like C#. I also have a strong foundation in programming in general, with expertise in JavaScript, Vue, and Tailwind CSS.
                Aside from coding, I find great joy in expressing my creativity through Digital Art, particularly in the realm of Pixel Art. It allows me to combine my technical skills with my artistic side, resulting in visually captivating creations.
                When I'm not immersed in the digital world, I prioritize taking care of my physical well-being. I am an advocate for leading an active lifestyle and enjoy working out regularly.
            </p>
            <p class="hero-content text-justify text-xs md:text-xl lg:text-xl">
                I am excited to showcase my projects, skills, and experiences on this platform. Feel free to explore my work and get in touch if you have any inquiries or collaboration opportunities. Thank you for visiting!
            </p>
            <br>
        </div>
        <div class="flex flex-col md:flex-row w-full">
            <div class="flex order-2 md:order-1 w-full md:w-1/2 lg:w-4/6 mx-2">
                <div class="my-2 w-full">
                    <div class="divider font-bold text-xs md:text-xl lg:text-3xl my-2"><p>Frontend</p></div>
                    <RatingItem :ratingNr="3" :missingNr="2" :skillName="'Vue.js'"></RatingItem>
                    <RatingItem :ratingNr="2" :missingNr="3" :skillName="'Tailwind'"></RatingItem>
                    <div class="divider font-bold text-xs md:text-xl lg:text-3xl my-2"><p>Backend</p></div>
                    <RatingItem :ratingNr="3" :missingNr="2" :skillName="'Node.js'"></RatingItem>
                    <RatingItem :ratingNr="3" :missingNr="2" :skillName="'Express'"></RatingItem>
                    <RatingItem :ratingNr="3" :missingNr="2" :skillName="'Axios'"></RatingItem>
                    <div class="divider font-bold text-xs md:text-xl lg:text-3xl my-2"><p>Programming Languages</p></div>
                    <RatingItem :ratingNr="1" :missingNr="4" :skillName="'SQL'"></RatingItem>
                    <RatingItem :ratingNr="4" :missingNr="1" :skillName="'Javascript'"></RatingItem>
                    <RatingItem :ratingNr="3" :missingNr="2" :skillName="'C#'"></RatingItem>
                    <div class="divider font-bold text-xs md:text-xl lg:text-3xl my-2"><p>Additional Tools</p></div>
                    <RatingItem :ratingNr="3" :missingNr="2" :skillName="'Unity'"></RatingItem>
                    <RatingItem :ratingNr="4" :missingNr="1" :skillName="'Figma'"></RatingItem>
                </div>
            </div>
            <div class="flex flex-col order-1 md:order-2 w-full card bg-base-300 rounded-box my-4 mx-2 justify-center">
            <div class="flex flex-row card bg-base-300 rounded-box my-4 mx-2 justify-center">
                    <div><img class="my-4" style="border-radius:5%; width:40vw" src="/dk.jpg"></div>
            </div>
            <div class="flex flex-row  card bg-base-300 rounded-box my-4 mx-2 justify-center">
                <div><p class="hero-content text-justify text-xl md:text-2xl lg:text-3xl p-20 italic">
                    "Programming is like a puzzle-solving game, except sometimes you're missing a few pieces, and you have to create the missing pieces yourself... while blindfolded... and juggling chainsaws."
                </p></div>
            </div>
            </div>
        </div>
    </div>

</template>

<style>
</style>
<script setup>
import RatingItem from "@/components/RatingItem.vue";
</script>