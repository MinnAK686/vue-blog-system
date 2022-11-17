<template>
  <div class="home">
    <PostsComponent :posts="posts" :error="error"></PostsComponent>
  </div>
</template>

<script>
import PostsComponent from '../components/Posts-component'
// @ is an alias to /src
import getAllPost from '@/composables/getAllPost';

export default {
  name: 'HomeView',
  components: {
    PostsComponent,
  },

  setup() {
    let {posts,error,loadPosts} = getAllPost();
  
    loadPosts();
    return {
      posts,error
    }
  }


}
</script>
