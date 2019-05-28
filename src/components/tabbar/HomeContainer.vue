<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/新闻.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/图片.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/商品购买.png" alt="" srcset="">
                    <div class="mui-media-body">商品购买</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/留言反馈.png" alt="" srcset="">
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/视频专区.png" alt="" srcset="">
                    <div class="mui-media-body">视频专区</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/联系我们.png" alt="" srcset="">
                    <div class="mui-media-body">联系我们</div>
                </a></li>
        </ul>
    </div>
</template>

<script>
    import {
        Toast
    } from 'mint-ui'
    export default {
        data() {
            return {
                lunbotulist: []
            }
        },
        created() {
            this.getlunbotu()
        },
        methods: {
            getlunbotu() {
                // 获取轮播图数据
                this.axios.get('/home/getlunbotu').then(resp => {
                    if (resp.status === 200) {
                        this.lunbotulist = resp.data.message;
                        // Toast("加载轮播图成功...");
                    } else {
                        Toast("加载轮播图失败...");
                    }
                    // console.log(resp);
                })
            }
        },

    }
</script>


<style lang="css" scoped>
    .mint-swipe {
        height: 150px;
    }

    .mint-swipe-item:nth-child(1) {
        background-color: red;
    }

    .mint-swipe-item:nth-child(2) {
        background-color: blue;
    }

    .mint-swipe-item:nth-child(3) {
        background-color: cyan;
    }

    .mint-swipe img {
        height: 100%;
        width: 100%
    }

    .mui-grid-view.mui-grid-9 {
        border: none;
    }

   .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        background-color: #fff;
        border: none;
    }

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell img {
        width: 30px;
        height: 30px;
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        font-size: 5px;
    }

</style>