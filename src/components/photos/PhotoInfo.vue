<template>
    <div class="photoinfo-container">
        <!-- 标题区域 -->
        <h3 class="title">{{ imginfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ imginfo.add_time }}</span>
            <span>点击次数: {{ imginfo.click }}</span>
        </p>

        <hr>

        <!-- 缩略图区域 -->
            <vue-preview :slides="thumbnail" class="imgPre"></vue-preview>

        <!-- 图片内容区域 -->
        <div class="content">
            {{ imginfo.content }}
        </div>

        <!-- 评论子组件区域 -->
        <cmt-box :id=id></cmt-box>

    </div>
</template>

<script>
    import { Toast } from "mint-ui"

    // 导入评论子组件
    import Comments from '../subcomponets/Comment.vue'
    export default {
        data() {
            return {
                id: this.$route.params.id,  // 图片id
                imginfo: {},  // 图片详情
                thumbnail: []  // 缩略图
            }
        },
        created(){
            this.getimgInfo(),
            this.getthumbnail()
        },
        methods: {
            getimgInfo(){
                this.axios.get("/home/photoinfo/getimginfo/" + this.id).then((resp) => {
                    if(resp.status === 200){
                        this.imginfo = resp.data.message
                    }else{
                        Toast("图片详情加载失败")
                    }
                    
                }).catch((error) => {
                    console.log(error.message);
                });
            },
            getthumbnail(){
                this.axios.get("/home/photoiinfo/getthumbnail/" + this.id).then((resp) => {
                    if(resp.status === 200){
                        //  补全缩略图的宽高
                        resp.data.message.forEach(item => {
                            item.w = 300;
                            item.h = 200;                            
                        });
                        this.thumbnail = resp.data.message;
                    }else{
                        Toast("缩略图加载失败")
                    }
                }).catch((error) => {
                    console.log(error.message);
                });
            }  
        },
        components: {
            "cmt-box": Comments
        }
    }
</script>


<style lang="scss">
// vue-preview 设置缩略图的样式时, 不能加style上 scoped
    .photoinfo-container {
        padding: 3px;
        .title {
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .imgPre{
            .my-gallery {
                display: flex;
                flex-wrap: wrap;
                figure {
                    margin: 0 3px;
                    img {
                        box-shadow: 0 0 8px #aaa;
                    }
                }
            }
        }
        .content {
            font-size: 13px;
            line-height: 30px;
            text-indent: 2em;
        }
    }


</style>
