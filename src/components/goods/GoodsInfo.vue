<template>
    <div class="goodsinfo-container">
        <!-- 轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper-box :lunbotulist="lunbotulist"></swiper-box>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>

    </div>
</template>

<script>
    import { Toast } from "mint-ui"
    // 导入轮播图组件
    import swiper from "../subcomponets/Lunbotu.vue"

    export default {
        data() {
            return {
                id: this.$route.params.id,  // 商品id
                lunbotulist: []  // 轮播图数据
            }   
        },
        created() {
            this.getLunbotu()
        },
        methods: {
            // 获取轮播图
            getLunbotu() {
                this.axios.get("/home/goodsinfo/getlunbotu/" + this.id).then((resp) => {
                    if(resp.status === 200) {
                        this.lunbotulist = resp.data.message;
                    }else{
                        Toast('轮播图加载失败')
                    }
                    
                }).catch((error) => {
                    console.log(error.message);
                });
            }
        },
        components: {
            "swiper-box": swiper
        }
    }
</script>

<style lang="scss" scoped>
    .goodsinfo-container {
        background-color: #eee;
        overflow: hidden;
    }

    .mui-card-content-inner {
        position: relative;
        padding: 6px;
    }

</style>