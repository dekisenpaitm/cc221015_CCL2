<template>
    <div class="collapse bg-base-200">
        <input type="checkbox" />
        <div class="collapse-title text-3xl font-medium">
            {{ users.name }}
            </div>
        <div class="flex justify-end mx-4 my-4"><router-link :to="'users/'+ users.userID">
            <div v-if="loggedIn">
            <button v-if="loggedIn.role === 'admin'" class="btn-wide btn btn-accent normal-case text-xl">View Profile</button>
            </div>
        </router-link>
        </div>
        <div class="collapse-content">
            <img v-bind:key="users.userID"/>
            <p>UserID: {{ users.userID }}</p>
            <p>UserName: {{ users.name }}</p>
        </div>
    </div>

    <div class="divider"></div>

</template>

<script>

export default {
  name: "UserGridItem",
  props: ['users', 'loggedIn'],
};
</script>

<style>
</style>