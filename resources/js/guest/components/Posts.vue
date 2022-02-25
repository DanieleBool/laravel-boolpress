<template>
    <div>
        <h2>Lista post:</h2>
        <ul class="">
            <li v-for="post in posts" :key="post.id">
                <router-link class="" :to="{name: 'single-post', params: {slug: post.slug}} ">
                    <div class="card">
                        <h3>{{post.title}}</h3>
                        
                        <div v-if="post.category" class="category">
                            Categoria: {{post.category.name}}
                        </div>
                        <div v-if="post.tags.length > 0" class="tags">
                            <span>Tag: </span>  
                            <ul>
                                <li v-for="tag in post.tags" :key="tag.id">
                                    {{tag.name}}
                                </li>
                            </ul>
                        </div>
                        <p>{{post.content}}</p>
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
    h2{
        margin: 50px 25px;
    }
    .link{
        text-decoration: none;
        color: black;
    }
    .post{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: stretch;
        gap: 50px;
        li{
            list-style: none;
            width: calc(100% / 4 - 50px);
            .card{
                img{
                    width: 100%;
                    max-width: 250px;
                    max-height: 250px;
                    margin-bottom: 20px;
                }
                background-color: #e3e7f0;
                padding: 30px;
                height: 100%;
                h3{
                    margin-bottom: 10px;
                }
                p{
                    display: block;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .category{
                    margin: 10px 0px;
                }
                .tags{
                    display: flex;
                    ul{
                        margin-left: 10px;
                        li{
                            list-style: inside;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>