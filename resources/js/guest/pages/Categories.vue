<template>
    <div class="container">
        <h2>Categorie:</h2>
        <ul>
            <li v-for="category in categories" :key="category.id">
                <router-link :to="{name: 'single-category', params: {slug: category.slug, title: category.name}}">{{category.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "categories",
    data() {
        return {
            categories: []
        }
    },
    created() {
        axios.get(`/api/categories`)
            .then( (response) => {
                this.categories = response.data;
            });
    },
}
</script>

<style scoped lang="scss">

</style>