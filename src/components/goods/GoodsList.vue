<template>
    <div class="goods-list">
        <!-- 网页中的2种跳转方式 -->
        <!-- 1.使用 a 标签进行跳转 -->
        <!-- 2.使用js的形式进行跳转(编程式导航) -->
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goGoodsInfo(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.now_price }}</span>
                    <span class="old">￥{{ item.old_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>

        <!-- 加载更多 -->
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
    data() {
        return {
            goodslist: [],  // 商品列表
            pageindex: 1  // 默认展示第一页的数据
        }
    },
    created(){
        this.getGoodsList(this.pageindex);
    },
    methods: {
        // 获取商品列表
        getGoodsList(pageindex) {
            this.axios.get("/home/goodslist/getgoodslist?pageindex=" + this.pageindex).then((resp) => {
                if(resp.status === 200) {
                    this.goodslist = resp.data.message;
                }else{
                    Toast("商品加载出错")
                }
            }).catch((error) => {
                console.log(error.message);
            });
        },
        // 加载更多商品
        getMore(){
            let pageindex = this.pageindex++;
            this.getGoodsList(pageindex);
            if( this.pageindex > 2){
                Toast("没有更多商品了")
            }
        },
        // 进入商品详情页: 使用vue-router提供的编程式导航进入商品详情页
        goGoodsInfo(id) {
            this.$router.push({ name: 'goodsinfo', params: {id: id} })
        }
    }
}
</script>

<style lang="scss" scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 8px;
        margin: 0;
        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #999;
            margin: 3px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2px;
            min-height: 270px;
            img {
                width: 100%;
                height: 65%;
            }

            .title {
                font-size: 14px;
                margin: 0;
            }

            .info { 
                background-color: #eee;
                p {
                    margin: 0;
                    padding: 3px;
                }
                .price {
                    .now {
                        color: red;
                        font-size: 14px;
                        font-weight: 300;
                        text-align: left;
                        margin-right: 15px;
                    }

                    .old {
                        font-size: 10px;
                        text-decoration: line-through;
                    }
                }

                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
    }
</style>
