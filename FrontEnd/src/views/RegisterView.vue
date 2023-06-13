<template>
    <form class="text-outline transparent" @submit.prevent="createUser">
        <label for="name">Username:</label>
        <input id="name" v-model="name" type="text" placeholder="Enter Username" name="name" required>
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="text" placeholder="Enter Email" name="email" required>
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" placeholder="Enter Password" name="password" required>
        <label for="pw-conf">Password confirmation:</label>
        <input id="pw-conf" v-model="passwordConfirmation" type="password" placeholder="Re-Enter Password" name="psw-conf" required>
        <div id="terms">
            <input type="checkbox" name="agree" required> I have agreed to the <a href="#">terms and conditions!</a>
        </div>
        <button class="button" type="submit">Register</button>
    </form>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };
    },
    methods: {
        createUser() {
            axios.post('http://localhost:3000/register', {
                name: this.name,
                email: this.email,
                password: this.password,
            })
                .then(response => {
                    console.log(response.data);
                    window.location.href = '/'
                })
                .catch(error => {
                    console.error(error);
                });
            this.name = '';
            this.email = '';
            this.password = '';
            this.passwordConfirmation = '';
        }
    }
};
</script>


<style scoped>

</style>