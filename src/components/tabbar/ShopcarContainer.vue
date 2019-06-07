<template>
    <div class="shopcar-container">

        <!-- 购物车商品列表区域 -->
        <div class="goods-list">

            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img src="https://images.pexels.com/photos/2351844/pexels-photo-2351844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="">
                        <div class="info">

                            <h1>菲尔普斯山寨机就是nb</h1>
                            <p>
                                <span class="price">￥2199</span>
                                <numbox-box></numbox-box>
                                <a href="#">删除</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 商品结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import numbox from "../subcomponets/ShopCar_numbox.vue"
    export default {
        data() {
            return {

            }
        },
        created() {
            this.getGoodsListInCart()
        },
        methods: {
            // 获取购物车中所有商品的数据
            getGoodsListInCart() {
                this.axios.get("/shopcar/getgoodslist/1,2,3").then((result) => {
                    if(result.status === 200){
                        console.log("success");
                    }
                }).catch((err) => {
                    console.log(err.message);
                });
            }
        },
        components: {
            "numbox-box": numbox
        }
    }
</script>


<style lang="scss" scoped>
    .shopcar-container {
        background-color: #eee;
        overflow: hidden;

        .goods-list {
            .mui-card-content-inner {
                display: flex;
                justify-content: space-around;
            }
            
            img {
                width: 60px;
                height: 50px;
                margin: auto 0;
            }

            .info {
                h1 {
                    font-size: 14px;
                    text-indent: 0.5em;
                }

                p {
                    display: flex;
                    justify-content: space-around;

                    .price {
                        color: red;
                        font-weight: bold;
                        margin: 4px 4px;
                    }

                    a {
                        margin-left: 10px;
                    }


                }



            }

        }
    }
</style>