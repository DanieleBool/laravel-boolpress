<template>
    <header>
        <!-- <ul v-if="!eAutenticato">
            <a href="admin/login">accedi</a>
            <a href="admin/register">registrati</a>
        </ul>
        <a v-else href="admin/home">Dashboard</a> -->
        <div class="container">
            <div class="">
                <router-link class="" :to="{name: 'home'}">Boolpress</router-link>
                <ul>
                    <li><router-link :to="{name: 'about'}">Chi siamo</router-link></li>
                </ul>
            </div>
            <div class="">
                <a href="admin/home">Area riservata</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    // computed:{
    //     eAutenticato: function(){
    //         return window.autenticato;
    //     }
    // }
}
</script>

<style lang="scss scoped">
</style>