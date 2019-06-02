<template>
    <div>
        <!-- 顶部导航区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id==0 ? 'mui-active': '']" v-for="item in categories"
                        :key="item.id" @tap="getimgListByCategoryId(item.id)">
                        <!-- 手机调式的bug：在mui组件中，@click事件不起作用 -->
                        <!-- 解决：使用@tap事件 -->
                        {{ item.title }}
                    </a>
                </div>
            </div>

        </div>

        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link v-for="item in imglist" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                <!-- 使用mint-ui提供的图片的懒加载存在的bug: 调用次方法时getimgListByCategoryId, 能异步获取图片的数据，但是不能渲染在页面上 -->
                <img :src="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.abstract }}</div>
                </div>
            </router-link>
        </ul>

    </div>
</template>


<script>
    // 导入mui的js控件
    import mui from '../../lib/mui/js/mui.min.js'
    import {
        Toast
    } from 'mint-ui'
    export default {
        data() {
            return {
                categories: [], // 图片分类
                imglist: []  // 图片列表
            }
        },
        created() {
            this.getimgCategory();
            // 刚进入页面时,显示all分类下的图片
            this.getimgListByCategoryId(0);
        },
        mounted() {
            /* 解决重写进入页面时，需要手动刷新才能滑动 */
            // 因为mui要操作DOM元素， 所以在mounted生命周期函数中初始化滑动控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 // flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getimgCategory() {
                this.axios.get("/home/photolist/getimgcategory").then(resp => {
                    if (resp.status === 200) {
                        this.categories = resp.data.message
                    } else {
                        Toast("图片加载失败")
                    }
                }).catch(error => {
                    console.log(error.message);
                })
            },
            // 根据分类id获取图片列表
            getimgListByCategoryId(category_id) {
                this.axios.get("/home/photolist/getimages/" + category_id).then(resp =>{
                    if(resp.status === 200){
                        this.imglist = resp.data.message
                        // console.log(resp);
                    }else{
                        Toast("加载图片列表失败")
                    }
                }).catch(error =>{
                    console.log(error.message);
                })
            }
        },
    }
</script>


<style lang="scss" scoped>
    /* 解决引用mui 乱动js控件产生的：Unable to preventDefault inside passive event listener due to target being treated as passive */
    /* 但是使用该样式后产生的bug */
    /* 1. 重写进入页面时，需要手动刷新才能滑动 */
    /* 2. 底部tabbar栏不能使用 */
    * {
        touch-action: pan-y;
    }

    .mui-slider {
        margin-top: 13px;
        position: relative;
        z-index: 1;
        overflow: hidden;
        width: 100;
    }

    .photo-list {
        list-style: none;
        margin: 0;
        padding: 8px;
        padding-bottom: 0;
        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 6px #999;
            position: relative;

            img {
                width: 100%;
                vertical-align: middle;
            }
  
            .info {
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 60px;
                .info-title {
                    font-size: 12px;
                }

                .info-body {
                    font-size: 10px;
                }
            }
            
        }
    }


</style>