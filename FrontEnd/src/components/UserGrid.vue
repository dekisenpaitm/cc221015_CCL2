<template>
  <div>
      <UserGridItem
              v-for="user in users"
              :key="user.userID"
              :users="user"/>
  </div>
</template>

<script>
import UserGridItem from "@/components/UserGridItem.vue";
export default {
  name: "UserGrid",
  props: ['users'],
  components: { UserGridItem },
};
</script>

<style scoped>
.grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
}
</style>