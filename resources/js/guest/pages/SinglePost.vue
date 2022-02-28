<template>
    <div class="container">
        <h2>{{post.title}}</h2>
        <img v-if="post.image" :src="`/storage/${post.image}`" :alt="post.title + ' image' ">
        <p>{{post.content}}</p>
        <div v-if="post.category" class="">
            Categoria: {{post.category.name}}
        </div>
        <div v-if="post.tags" class="">
            <span>Tag:</span>
            <ul>
                <li v-for="tag in post.tags" :key="tag.id">
                    {{tag.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SinglePost",
    data() {
        return {
            post: []
        }
    },
    created() {
        axios.get(`/api/posts/${this.$route.params.slug}`)
            .then( (response) => {
                this.post = response.data;
            }).catch( (error)=> {
                this.$router.push({name: 'page-404'})
            })
    },
}
</script>

<style scoped lang="scss">

</style>