<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h1 class="title">{{ newsinfo.title }}</h1>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间: {{ newsinfo.add_time }}</span>
            <span>点击： {{ newsinfo.click }}次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content">
            {{ newsinfo.content }}
        </div>

        <!-- 评论子组件区域 -->
        <comment-box :id=id></comment-box>


    </div>
</template>


<script>
    import {
        Toast
    } from 'mint-ui'

    // 导入评论子组件
    import Comments from '../subcomponets/Comment.vue'

    export default {
        
        data() {
            return {
                id: this.$route.params.id,  // 将url中传递的id，挂载到data上
                newsinfo: {}
            }
        },
        created() {
            this.getNewsInfo()  
        },
        methods: {
            getNewsInfo() {
                this.axios.get('/home/newsinfo/' + this.id).then(resp => {
                    if(resp.status === 200) {
                        this.newsinfo = resp.data.message
                        // Toast("新闻详情加载成功")
                    }else{
                        Toast("新闻详情加载失败")
                    }
                })
            }
        },
        components: {
            // 注册子组件
            "comment-box": Comments
        }
        
    }
</script>


<style scoped>
    .newsinfo-container {
        padding: 0 3px;
        
    }

    .title {
        font-size: 16px;
        text-align: center;
        margin: 20px 0;
        color: red;
    }

    .subtitle {
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }

    .content {
        text-indent: 2em;
        word-spacing: 4px;
        letter-spacing: 2px;
        line-height: 1.5;
    }
</style>
