<template>
    <div class="goodsinfo-container">
        <!-- 半场函数实现小球动画 -->
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>

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
            <div class="mui-card-header">{{ goodsinfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<span><del>￥{{ goodsinfo.old_price }}</del></span> &nbsp;&nbsp;销售价:<span class="now_price">￥{{ goodsinfo.now_price }}</span>
                    </p>
                    <p>购买数量：<numbox class="num-box"></numbox></p>

                    <p class="buy">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsinfo.goods_num }}</p>
                    <p>库存情况：{{ goodsinfo.stock_quantity }}</p>
                    <p>上架时间：{{ goodsinfo.add_time }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goGoodsComment(id)">商品评论</mt-button>
            </div>
        </div>

    </div>
</template>

<script>
    import {
        Toast
    } from "mint-ui"
    // 导入轮播图组件
    import swiper from "../subcomponets/Lunbotu.vue"

    // 导入数字选择框子组件
    import numbox from "../subcomponets/GoodsInfo_numbox.vue"

    export default {
        data() {
            return {
                id: this.$route.params.id, // 商品id
                lunbotulist: [], // 轮播图数据
                goodsinfo: {},  // 商品信息
                ballflag: false  // 控制小球隐藏和显示
            }
        },
        created() {
            this.getLunbotu(),
            this.getgoodsinfo()
        },
        methods: {
            // 获取轮播图
            getLunbotu() {
                this.axios.get("/home/goodsinfo/getlunbotu/" + this.id).then((resp) => {
                    if (resp.status === 200) {
                        this.lunbotulist = resp.data.message;
                    } else {
                        Toast('轮播图加载失败')
                    }

                }).catch((error) => {
                    console.log(error.message);
                });
            },
            // 商品详细信息
            getgoodsinfo() {
                this.axios.get("/home/goodsinfo/getgoodsinfo/" + this.id).then(resp => {
                    if(resp.status === 200) {
                        this.goodsinfo = resp.data.message;
                    }else{
                        Toast("获取商品信息失败");
                    }
                }).catch(error => {
                    console.log(error);
                })
            },
            // 跳转到图文介绍页
            goDesc(id) {
                this.$router.push({ name: 'goodsdesc', params: {id: id} })
            },
            // 跳转到商品评论
            goGoodsComment(id) {
                this.$router.push({ name: 'goodscomment', params: {id: id} })
            },
            // 添加到购物车
            addShopCar() {
                this.ballflag = !this.ballflag;
            },

            // 动画的钩子函数
            beforeEnter(el) {
                el.style.transform = "translate(0, 0)";  // 小球位移的起点
            },

            // 小球动画bug：不同分辨率下，小球的终点不定
            // 原因：写死了终点的坐标，不同分辨率下，购物车(badge)的坐标不同
            //  解决：不同分辨率下，动态计算出终点(购物车badge)到起点距离
            //  操作DOM，使用getBoundingClientRect()方法计算出一个DOM对象距离视窗top,bottom, left, right值

            // rectObject.top：元素上边到视窗上边的距离;
            // rectObject.right：元素右边到视窗左边的距离;
            // rectObject.bottom：元素下边到视窗上边的距离;
            // rectObject.left：元素左边到视窗左边的距离;

            enter(el, done) {
                // 获取小球的起始位置
                const ballposition = this.$refs.ball.getBoundingClientRect();
                // 操作DOM，获取badge的位置
                const badgeposition = document.getElementById('badge').getBoundingClientRect();

                // 计算出相对位置
                const x = badgeposition.left - ballposition.left;  // 横向位移长度
                const y = badgeposition.top - ballposition.top; // 纵向位移长度

                el.offsetWidth;
                el.style.transform = `translate(${x}px, ${y}px)`;  // 小球位移的终点
                el.style.transition = "all 0.6s cubic-bezier(.17,.67,.81,.7)";
                done();
            },
            afterEnter(el) {
                this.ballflag = !this.ballflag;
            }
            
        },
        components: {
            "swiper-box": swiper,
            "numbox": numbox
        }
    }
</script>

<style lang="scss" scoped>
    .goodsinfo-container {
        background-color: #eee;
        overflow: hidden;
    }
    
    .now_price {
        color: red;
        font-size: 15px;
        font-weight: bold;
    }

    .mui-card-footer {
        display: block;
        .mint-button {
            margin: 10px auto;
        }
    }

    .num-box {
        display: inline-block;
    }
    .buy {
        .mint-button {
            margin: auto 5px;
        }
    }

    .ball {
        width: 15px;
        height: 15px;
        background-color:red;
        border-radius: 50%;
        position: absolute;
        z-index: 99;
        top: 340px;
        left: 150px;
    }

</style>