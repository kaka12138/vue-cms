<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
    <textarea placeholder="请输入评论(做多120字)" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
        <div class="cmt-item" v-for="(item, index) in comments" :key="item.add_time">
            <div class="cmt-title">
                第{{ index + 1 }}楼&nbsp;&nbsp;用户: {{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time }}
            </div>
            <div class="cmt-body">
                {{ item.content }}
            </div>
        </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMoreComments">加载更多</mt-button>    

    </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    data() {
        return {
            pageindex: 1,  // 默认展示第一页的评论数据
            comments: [],  // 从服务器获取的评论数据
            msg: '' //  用户评论的内容
        }
    },
    created() {
        this.getComments()
    },
    methods: {
        // 获取评论数据
        getComments(){
            this.axios.get("/home/newsinfo/getcomments/" + this.id + "?pageindex=" + this.pageindex).then(resp => {
                if (resp.status === 200){
                    this.comments = this.comments.concat(resp.data.message)
                    // Toast("评论加载成功")
                }
                else{
                    Toast("评论加载失败")
                }
            }).catch(error => {
                console.log(error.message);
            })
        },
        // 获取更多数据
        getMoreComments(){
            this.pageindex++;
            this.getComments()
            // 测试数据有限, 最多加载4页数据
            if (this.pageindex > 4){
                Toast("亲, 没有更多评论了!!!")
            }
        },
        postComment(){
            this.axios.post('/home/newsinfo/postcomments/' + this.$route.params.id, {
                content: this.msg.trim()
            }).then(resp => {
                if(resp.status === 200 && resp.data.message.code === 0){
                    let cmt = {
                        user_name: "匿名用户",
                        add_time: Date.now(),
                        content: this.msg
                    }
                    this.comments.unshift(cmt)
                    this.msg = ""
                    Toast(resp.data.message.deal_message)
                    // console.log(resp);
                }else{
                    Toast('评论失败')
                }
            }).catch( error => {
                console.log(error.message);
            })
        }
        
    },
    props: ["id"]  // 父组件传递过来的属性
}
</script>

<style scoped>
    .cmt-container h3 {
        font-size: 18px;
    }

    .cmt-container textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list {
        margin: 5px 0;
    }

    .cmt-item {
        font-size: 13px;
    }

    .cmt-title {
        line-height: 30px;
        background-color: #ccc;
    }

    .cmt-body {
        line-height: 20px;
        text-indent: 2em;
    }

</style>
