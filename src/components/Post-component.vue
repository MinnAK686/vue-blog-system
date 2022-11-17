<template lang="">
    <div>
        <h3>
            <router-link :to="{name: 'post-detail',params: {id: post.id}}">{{post.title}}</router-link>
        </h3>
        <p>{{post.detail}}</p>
        <p>
            <span v-for="tag in post.tags" :key="tag">
                <router-link :to="{name: 'tags',params: {tag}}" class="pill">{{tag}}</router-link>
            </span>
        </p>
        <hr>
    </div>
</template>
<script>
export default {
    props: ["post"]
}
</script>
<style>
    
</style>