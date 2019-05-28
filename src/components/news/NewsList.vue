<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{ item.add_time }}</span>
                            <span>点击次数: {{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
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
                newslist: []
            }
        },
        created() {
            this.getNewsList()
        },
        methods: {
            // 获取新闻列表
            getNewsList() {
                this.axios.get("/home/newslist/getnewslist").then( resp => {
                    if (resp.status === 200) {
                        this.newslist = resp.data.message
                        // Toast("获取新闻列表成功")
                    }else{
                        Toast("获取新闻列表失败")
                    }
                })
            }
        },
    }
</script>

<style scoped>
    .mui-media-body h1 {
        font-size: 14px;
    }

    .mui-ellipsis {
        display: flex;
        justify-content: space-between;
    }
    
    .mui-ellipsis span {
        color: #226fff;
        font-size: 12px;
    }

</style>