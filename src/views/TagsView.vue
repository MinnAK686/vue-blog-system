<template>
    <div>
        <Posts :posts="filteredPosts"></Posts>
    </div>
</template>
<script>
import Posts from "@/components/Posts-component.vue"
import getAllPost from '@/composables/getAllPost';
import { computed } from "@vue/reactivity";
export default {
  components: { Posts },
    props: ['tag'],
    setup(props) {
        let {posts,error,loadPosts} = getAllPost();
        loadPosts();

        const filteredPosts = computed(() => {
            return posts.value.filter(post => {
                return post.tags.includes(props.tag)
            })
        })

        return {
            posts,error,filteredPosts
        }
    }
}
</script>
<style>
    
</style>