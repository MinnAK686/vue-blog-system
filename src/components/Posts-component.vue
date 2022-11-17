<template lang="">
    <div>
        <h1>Posts</h1>
        <div v-if="error">{{error}}</div>
        <div v-for="post in posts" :key="post.id">
            <Post :post="post"></Post>
        </div>
    </div>
</template>
<script>
import Post from "@/components/Post-component.vue"

export default {
    props: ["posts","error"],
    components: {
        Post
    }
}
</script>
<style lang="">
    
</style>