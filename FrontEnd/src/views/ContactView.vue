<template>
    <div class="flex flex-wrap mx-4 md:mx-20 lg:mx-64">
        <TextBoxItem class="flex-1 justify-center" :title="title" :body="body"/>
        <div class="divider flex-0  w-full"></div>
        <ContactBox @sendMessage="sendMessage" class="flex-1 w-full items-center justify-center" />
    </div>
</template>

<script>
import ContactBox from "@/components/ContactBox.vue";
import TextBoxItem from "@/components/TextBoxItem.vue";

export default {
    name: "ContactView",
    components: {ContactBox, TextBoxItem},
    data(){
        return{
            title:"Contact me!",
            body:[
                {
                    p:  "I'm thrilled that you're interested in getting in touch. Please feel free to reach out to me using the form below."
                },
                {
                    p:  "To ensure a prompt response, kindly include your name, email address, the title of your message, and the body of your inquiry. " +
                        "Rest assured that I value your privacy and confidentiality. Your message will be handled with utmost care, and I typically respond within 48 hours. " +
                        "Once I have read and addressed your message, it will be deleted to maintain your privacy."
                },
                {
                    p:  "I look forward to hearing from you and discussing exciting opportunities or any questions you may have!"
                },
            ]
        }
    },
    methods: {
        sendMessage: function handleContent(data) {
            this.$emit('sendMessage', data);
        },
    }
}
</script>

<style scoped>

</style>