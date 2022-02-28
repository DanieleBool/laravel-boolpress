<template>
    <main>
                <!-- <h2>Lista post:</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <h3>{{post.title}}</h3>
                <h3>{{post.content}}</h3>
            </li>
        </ul> -->
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    name: "Main",
}
</script>

<style lang="scss" scoped>

</style>