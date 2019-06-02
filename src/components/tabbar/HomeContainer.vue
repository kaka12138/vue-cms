<template>
    <div>
        <!-- 轮播图 -->
        <swiper-box :lunbotulist="lunbotulist"></swiper-box>
        
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/新闻.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/图片.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/商品购买.png" alt="" srcset="">
                    <div class="mui-media-body">商品购买</div>
                </router-link></li>
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

    //  导入轮播图组件
    import swiper from '../subcomponets/Lunbotu.vue'

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
        components: {
            "swiper-box": swiper
        }

    }
</script>


<style lang="css" scoped>
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