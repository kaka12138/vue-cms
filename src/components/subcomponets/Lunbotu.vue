<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        //  父组件向轮播图子组件传递的属性
        props: [
            "lunbotulist"
        ]
    }
</script>


<style lang="css" scoped>
    .mint-swipe {
        height: 150px;
    }

    .mint-swipe img {
        height: 100%;
        width: 100%
    }

    
</style>