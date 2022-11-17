<template lang="">
    <div>
        <h1>Create Post</h1>
        <div class="form-container">
            <form @submit.prevent="createPost">
                <div class="form-control">
                    <label>Title</label>
                    <input type="text" id="title" v-model="title">
                </div>
                <div class="form-control">
                    <label>Detail</label>
                    <input type="text" v-model="detail">
                </div>
                <div class="form-control">
                    <label>Tags (Press Enter key to add Tag)</label>
                    <input type="text" id="title" v-model="tag" @keypress.enter.prevent="addTag">
                </div>
                <div class="form-control">
                    <span v-for="tag in tags" :key="tag">
                        <span class="pill">{{tag}}</span>
                    </span>
                    
                </div>
                <button class="btn">Create</button>
            </form>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    
    setup() {
        let router = useRouter();

        let title = ref("");
        let detail = ref("");
        let tag = ref("");
        let tags = ref([]);

        const addTag = () => {
            if(!tags.value.includes(tag.value) && !tag.value == "") {
                tags.value.push(tag.value)
            }
            tag.value = "";
        }

        const createPost = async () => {
            await fetch("http://localhost:3000/posts",{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    title: title.value,
                    detail: detail.value,
                    tags: tags.value
                })
            })
            router.push("/");
        }

        return {
            title,detail,tag,tags,addTag,createPost
        }
    }

}
</script>
<style>

.form-container {
    max-width: 400px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    margin: 0 auto;
}

.form-container .form-control {
    margin: 1.5rem;
    position: relative;
}
.form-control label {
    position: absolute;
    top: -18px;
    color: #666;
}
.form-control input {
    width: 90%;
    padding: 0.7rem 1.2rem;
    margin-bottom: 0.4rem;
    border: none;
    background-color: #f2f2f2;
    border-radius: 10px;
    color: #666;
    font-size: 1.1rem;
}
.form-control input:focus {
    outline: none;
}
.btn {
    padding: 0.5rem 1rem;
    color: wheat;
    background-color: royalblue;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 90%;
    transition: 200ms;
}
.btn:hover {
    background-color: #0738ca;
}
.pill {
    display: inline-block;
    margin: 0.3rem;
    background-color: #ccc;
    border-radius: 3px;
    padding: 0.3rem 0.6rem;
    cursor: pointer;
}

</style>