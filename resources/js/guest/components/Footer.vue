<template>
    <footer>
        <div class="container">
            <router-link :to="{name: 'about'}">Chi siamo</router-link>
            <a href="#">footer link</a>
            <a href="#">footer link</a>
            <a href="#">footer link</a>
            <a href="#">footer link</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style lang="scss scoped">
</style>