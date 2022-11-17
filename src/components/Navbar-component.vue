<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link :to="{name: 'create-post'}">Create Post</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>