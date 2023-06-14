<template>
<div>
    <button v-on:click="userLogout" class="btn btn-accent">Button</button>
</div>
</template>

<script>
import axios from "axios";

export default {

    methods:{
        userLogout(){
            console.log("loggedOut");
            axios.get('http://localhost:3000/logout',{
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                window.location.href = '/'
            })
        }

}
}
</script>

