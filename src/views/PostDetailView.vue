<template lang="">
    <div v-if="error">{{error}}</div>
    <div>
        <div v-if="Object.keys(post).length">
            <!-- <SinglePost :post="post"></SinglePost> -->
            <h3>{{post.title}}</h3>
            <p>{{post.detail}}</p>
            <p>
                <span v-for="tag in post.tags" :key="tag">
                    <router-link :to="{name: 'tags',params: {tag}}" class="pill">{{tag}}</router-link>
                </span>
            </p>
        </div>
        <div v-else>
            <Spinner></Spinner>
        </div>
    </div>
</template>
<script>
import SinglePost from '@/components/Post-component.vue';
import getSinglePost from "@/composables/getSinglePost";
import Spinner from '@/components/Spinner.vue';
import { useRoute } from "vue-router";
export default {
    props: ["id"],
    components: {
        SinglePost,Spinner
    },
    setup() {
        let route = useRoute();
        let {post,error,loadPost} = getSinglePost(route.params.id);
        loadPost();

        return {
            post,error
        }
    }
}
</script>
<style>
    
</style>