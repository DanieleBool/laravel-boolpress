import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import SinglePost from "../pages/SinglePost.vue";
import PageNotFound from "../pages/PageNotFound.vue";
import Categories from "../pages/Categories.vue";
import SingleCategory from "../pages/SingleCategory.vue";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: { title: 'Home' }
        },
        {
            path: "/chi-siamo",
            name: "about",
            component: About,
            meta: {title: 'Chi Siamo'}
        },
        {
            path: "/posts/:slug",
            name: "single-post",
            component: SinglePost,
        },
        {
            path: "/categorie",
            name: "categories",
            component: Categories,
            meta: { title: 'Categorie' }
        },
        {
            path: "/categorie/:slug",
            name: "single-category",
            component: SingleCategory,
        },
        {
            path: "*",
            name: "page-404",
            component: PageNotFound,
            meta: { title: 'Error 404' }
        },
    ]
});

export default router 