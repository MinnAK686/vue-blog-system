import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import Tags from '../views/TagsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/create-post',
    name: 'create-post',
    component: CreatePostView
  },
  {
    path: '/posts/post/:id',
    name: 'post-detail',
    component: PostDetailView,
    props:true
  },
  {
    path: '/tags/:tag',
    name: 'tags',
    component: Tags,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
