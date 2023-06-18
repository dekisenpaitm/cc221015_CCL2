<template>
    <MessageGridItem :loggedIn="loggedIn"
                  v-for="message in messages"
                  :key="message.contactID"
                  :message="message"/>
</template>

<script>
import MessageGridItem from "@/components/MessageGridItem.vue";
export default {
    name: "MessageGrid",
    props: ['messages', 'loggedIn'],
    components: { MessageGridItem },
};
</script>

<style>
</style>