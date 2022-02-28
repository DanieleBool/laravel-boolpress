<template>
    <div>
        <h2>Lista post:</h2>
        <ul class="">
            <li v-for="post in posts" :key="post.id">
                <router-link class="" :to="{name: 'single-post', params: {slug: post.slug, title: post.title}} ">
                    <div class="">
                        <img :src="post.image ? 'storage/' + post.image : 'https://static.educalingo.com/img/it/800/mondo.jpg'" :alt="post.title + ' image'">
                        <h3>{{post.title}}</h3>
                        <p>{{post.content}}</p>
                        <div v-if="post.category" class="">
                            Categoria: {{post.category.name}}
                        </div>
                        <div v-if="post.tags.length" class="">
                            <span>Tag: </span>  
                            <ul>
                                
                                <li v-for="tag in post.tags" :key="tag.id">
                                    {{tag.name}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Posts",
    data() {
        return {
            posts: []
        }
    },
    created() {
        axios.get('/api/posts')
            .then( (response) => {
                this.posts = response.data;
            })
    },
}
</script>

<style scoped lang="scss">

</style>