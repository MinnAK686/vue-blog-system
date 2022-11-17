<template>
    <div>
        <div class="loader"></div>
    </div>
</template>
<script>
export default {
    setup() {
        console.log("loading...")
    }
}
</script>
<style>
    .loader {
        width: 40px;
        height: 40px;
        border:3px solid transparent;
        border-radius: 50%;
        margin:30px auto;
        border-top-color: red;
        animation: spin 150ms infinite;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

</style>