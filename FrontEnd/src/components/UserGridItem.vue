<template>
  <div>
    <img v-bind:src="users.userID" />
    <h3>{{ users.name }}</h3>
    <p>{{ users.email }}</p>
      <router-link :to="'users/'+ users.userID">
      <button>View Details</button>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "UserGridItem",
  props: ["users"],
};
</script>

<style scoped>
.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>