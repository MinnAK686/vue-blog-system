import { ref } from "vue";


const getSinglePost = (id) => {
    const post = ref({});
    const error = ref("");
    // let waitLoading = new Promise((resolve,reject) => {
    //     setTimeout(resolve,2000);
    // })
    const loadPost = async () => {
        try {
            // await waitLoading
            let response = await fetch("http://localhost:3000/posts/"+id);
            if(response.status === 404) {
                throw new Error("404 Post Not Found");
            }
            const data = await response.json();
            post.value = data;
        } catch (err) {
            error.value = err.message;
        }
    }

    return {
        post,error,loadPost
    }
}

export default getSinglePost;