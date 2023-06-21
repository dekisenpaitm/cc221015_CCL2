<template>
    <div>
      <div class="flex flex-col justify-center items-center my-4 mx-4 md:mx-20 lg:mx-64">
        <CarouselGrid />
          <div class="divider w-full"></div>
          <TextBoxItem :body="body" :title="title" />
          <div class="divider w-full"></div>
          <TextBoxItem :body="body_2" :title="title_2" />
      </div>
    </div>
</template>

<script>

import CarouselGrid from "@/components/CarouselGrid.vue";
import TextBoxItem from "@/components/TextBoxItem.vue";

export default {
    components: {TextBoxItem, CarouselGrid},
    props:["loggedIn"],
    data(){
        return{
            title:"Welcome!",
            body:[
                {
                    p:  "I am thrilled to showcase my passion for game development, pixel art, and UI/UX design. Here, you'll find a collection of my work and projects in these exciting fields." +
                        "If you have any questions feel free to contact me!"
                },
                {
                    p:  "Pixel art is my canvas of choice, allowing me to bring retro-inspired visuals to life. Each pixel is meticulously placed to create charming characters, vibrant environments," +
                        "and nostalgic atmospheres that evoke a sense of nostalgia."
                },
                {
                    p:  "In the realm of UI/UX design, I strive to create intuitive and visually appealing interfaces that enhance user experiences. I believe that seamless interactions and thoughtful design choices" +
                        "are key to captivating users and ensuring a delightful journey."
                },
                {
                    p:  " Feel free to explore my portfolio and dive into my projects. I hope you enjoy the showcase of my gamedev endeavors, pixel art creations, and UI/UX design works." +
                        "If you have any inquiries or would like to collaborate, don't hesitate to reach out. Let's create something extraordinary together!"
                }
            ],

            title_2:"Rules",
            body_2:[
                {
                    p:  "1. Account Creation: To like and comment on my content, I kindly ask you to create an account. This helps me maintain a sense of community and encourages responsible engagement."
                },
                {
                    p:  "2. Offensive Account Names: I value inclusivity and respect for all individuals. Therefore, any accounts with offensive or derogatory names will be promptly deleted. I believe in fostering a welcoming atmosphere for everyone."
                },
                {
                    p:  "3. Deleting Offensive Comments: I encourage open discussions and constructive feedback. However, any comments that are offensive, disrespectful, or violate my community guidelines will be removed. My aim is to cultivate a positive and supportive space for all visitors."
                },
                {
                    p:  "4. Be Kind and Respectful: I believe in treating others with kindness, empathy, and respect. I encourage visitors to engage in meaningful conversations, share ideas, and offer constructive criticism in a polite and considerate manner."
                },
                {
                    p:  "5. Other Necessary Guidelines: While I strive to provide a platform that encourages creativity and free expression, I also request you to adhere to copyright laws, refrain from spamming or promoting irrelevant content, and maintain a safe and friendly environment for all."
                },
                {
                    p:  "5. Other Necessary Guidelines: While I strive to provide a platform that encourages creativity and free expression, I also request you to adhere to copyright laws, refrain from spamming or promoting irrelevant content, and maintain a safe and friendly environment for all."
                },
                {
                    p:  "By following these rules, we can create a vibrant and inclusive community where everyone feels welcome. We appreciate your cooperation in making our website a positive space for all visitors."
                }
                ,
                {
                    p:  "If you have any questions or concerns, please don't hesitate to contact me. Thank you for being a part of my community!"
                }
            ],
        }
    }
}
</script>