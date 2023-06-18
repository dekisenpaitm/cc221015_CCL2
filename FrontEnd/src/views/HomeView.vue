<template>
    <div>
    <div class="flex flex-wrap justify-center items-center my-4">
        <CarouselGrid/>
        <div class="flex-grow hero-content card bg-base-300 rounded-box place-items-center my-2">
                <h1 class="text-3xl">Welcome Visitor!</h1>
            <p class="text-justify">
                    I am thrilled to showcase my passion for game development, pixel art, and UI/UX design. Here, you'll find a collection of my work and projects in these exciting fields.
                If you have any questions feel free to contact me!
            </p>
            <p class="text-justify">
                    As a game developer, I love crafting immersive gaming experiences that transport players into unique worlds. From concept development to gameplay mechanics and storytelling,
                    I pour my creativity into every aspect of game creation.
            </p>
            <p class="text-justify">
                    Pixel art is my canvas of choice, allowing me to bring retro-inspired visuals to life. Each pixel is meticulously placed to create charming characters, vibrant environments,
                    and nostalgic atmospheres that evoke a sense of nostalgia.
            </p>
            <p class="text-justify">
                    In the realm of UI/UX design, I strive to create intuitive and visually appealing interfaces that enhance user experiences. I believe that seamless interactions and thoughtful design choices
                    are key to captivating users and ensuring a delightful journey.
            </p>
            <p class="text-justify">
                    Feel free to explore my portfolio and dive into my projects. I hope you enjoy the showcase of my gamedev endeavors, pixel art creations, and UI/UX design works.
                    If you have any inquiries or would like to collaborate, don't hesitate to reach out. Let's create something extraordinary together!
            </p>

        </div>

        <div class="flex-grow hero-content card bg-base-300 rounded-box place-items-center my-4">
            <h1 class="text-3xl">Rules!</h1>
            <p class="text-justify">
                <strong>1. Account Creation:</strong> To like and comment on my content, I kindly ask you to create an account. This helps me maintain a sense of community and encourages responsible engagement.
            </p>

            <p class="text-justify">
                <strong>2. Offensive Account Names:</strong> I value inclusivity and respect for all individuals. Therefore, any accounts with offensive or derogatory names will be promptly deleted. I believe in fostering a welcoming atmosphere for everyone.
            </p>

            <p class="text-justify">
                <strong>3. Deleting Offensive Comments:</strong> I encourage open discussions and constructive feedback. However, any comments that are offensive, disrespectful, or violate my community guidelines will be removed. My aim is to cultivate a positive and supportive space for all visitors.
            </p>

            <p class="text-justify">
                <strong>4. Be Kind and Respectful:</strong> I believe in treating others with kindness, empathy, and respect. I encourage visitors to engage in meaningful conversations, share ideas, and offer constructive criticism in a polite and considerate manner.
            </p>

            <p class="text-justify">
                <strong>5. Other Necessary Guidelines:</strong> While I strive to provide a platform that encourages creativity and free expression, I also request you to adhere to copyright laws, refrain from spamming or promoting irrelevant content, and maintain a safe and friendly environment for all.
            </p>

            <p class="text-justify">By following these rules, we can create a vibrant and inclusive community where everyone feels welcome. We appreciate your cooperation in making our website a positive space for all visitors.</p>

            <p class="text-justify">If you have any questions or concerns, please don't hesitate to <router-link to="/contact"><a class="font-bold text-accent">contact me</a></router-link>. Thank you for being a part of my community!</p>
        </div>
    </div>
    </div>
</template>


<script>
</script>

<script setup>
import CarouselGrid from "@/components/CarouselGrid.vue";
</script>