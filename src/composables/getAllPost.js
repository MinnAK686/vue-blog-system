import { ref } from "vue";


const getAllPost = () => {
    const posts = ref([]);
    const error = ref("");

    const loadPosts = async () => {
        try {
            let response = await fetch("http://localhost:3000/posts");
            if(response.status === 404) {
                throw new Error("404 Posts Not Found!");
            }
            let datas = await response.json();
            posts.value = datas;
        } catch (err) {
            error.value = err.message;
        }
    }

    return {
        posts,error,loadPosts
    }
}

export default getAllPost;