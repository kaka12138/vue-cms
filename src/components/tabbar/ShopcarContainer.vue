<template>
    <div class="shopcar-container">

        <!-- 购物车商品列表区域 -->
        <div class="goods-list">

            <div class="mui-card" v-for="(item, index) in goodsinfo" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src=item.img_url
                            alt="">
                        <div class="info">

                            <h1>{{ item.title }}</h1>
                            <p>
                                <span class="price">￥{{ item.sell_price }}</span>
                                <numbox-box :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox-box>
                                <a href="#" @click.prevent="remove(item.id, index)">删除</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 商品结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品件<span class="color">{{ $store.getters.getGoodsCountandTotal.count }}</span>, 总价￥<span class="color">{{ $store.getters.getGoodsCountandTotal.total }}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
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
                goodsinfo: []  // 购物车商品列表数据
            }
        },
        created() {
            this.getGoodsListInCart()
        },
        methods: {
            // 获取购物车中所有商品的数据
            getGoodsListInCart() {
                // 获取store中所有商品的id, 使用逗号分割id("1, 2, 3")
                let ids = []
                this.$store.state.cart.forEach(item => {
                    ids.push(item.id)
                });
                
                // store中的数据为空时
                if(ids.length <=0) {
                    return;
                }
                
                // 获取数据
                this.axios.get("/shopcar/getgoodslist/" + ids.join(",")).then((resp) => {
                    if(resp.status === 200 ) {
                        this.goodsinfo = resp.data.message;
                    }
                }).catch((error) => {
                    console.log(error.message);
                });
                
            },
            // 删除购物车中选中的商品(既要删除store中的数据，也要删除goodsinfo中的数据)
            remove(id, index) {
                this.goodsinfo.splice(index, 1);
                this.$store.commit("removeFormCart", id)
            },
            // 点击/取消 选中开关，将状态同步到store中
            selectedChanged(id, status) {
                this.$store.commit("updateSelctedStatus", { id: id, selected: status })
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

    .jiesuan {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .color {
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }
</style>