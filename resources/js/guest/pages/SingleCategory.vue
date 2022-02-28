<template>
    <div class="container">
        <h2>{{category.name}}</h2>
        <h3>Post:</h3>
        <ul v-if="category.post && category.post.length">
            <li v-for="post in category.post" :key="post.id"><router-link :to="{name: 'single-post', params: {slug: post.slug, title: post.title}}">{{post.title}}</router-link></li>
        </ul>
        <p v-else>Non sono presenti post</p>
    </div>
</template>

<script>
export default {
    name: "SingleCategory",
    data() {
        return {
            category: []
        }
    },
    created() {
        axios.get(`/api/categories/${this.$route.params.slug}`)
            .then( (response) => {
                this.category = response.data;
            }).catch( (error)=> {
                this.$router.push({name: 'page-404'})
            })
    },
}
</script>

<style scoped lang="scss">

</style>