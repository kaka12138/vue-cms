// 引入Mock库
const Mock = require("mockjs")

// Random对象
const Random = Mock.Random;

// 轮播图数据
const lubotuList = function() {
    let img1 = { "url": Random.image("200x150", "#50B347", "#fff", 'img1') };
    let img2 = { "url": Random.image("200x150", "#4A7BF7", "#fff", 'img2') };
    let img3 = {"url": Random.image("200x150", "#894FC4", "#fff", 'img3') };
    return {
        message: [img1, img2, img3]
    }
}

//  新闻列表数据
const newslist = function() {
    var news = []

    for (let i=1; i<11; i++) {
        let id = i
        let add_time = Random.datetime()  // 新闻发表时间
        let click = Mock.mock({
            "num|1-100":100
        }).num  // 新闻被点击的次数
        let img_url = Random.image("100x100", Random.color())  // 新闻图片地址
        let title = Random.ctitle()  // 新闻标题
        let new_abstract = Random.csentence(15, 30)  // 新闻摘要

        let one_news = { id: id, add_time: add_time, click: click, img_url: img_url, title: title, new_abstract: new_abstract }
        news.push(one_news)
    }

    return { 
        message: news
    }
}

// 新闻详情页数据
const newsinfo = function() {
    let id = Mock.mock({
        "num|1-10":10
    }).num  // 新闻id
    let title = Random.ctitle()  // 新闻标题
    let add_time = Random.datetime()  // 新闻发表时间
    let click = Mock.mock({
        "num|1-100":100
    }).num  // 新闻被点击的次数
    let content = Random.cparagraph(15, 30)  // 新闻内容

    let news_info = { id: id, title: title, add_time: add_time, click: click, content: content }
    
    return {
        message: news_info
    }

}

// 评论数据(默认返回第一页的数据: pageindex=1)
const commentslist = function() {
    let comments = []

    for(let i=1; i<11; i++){
        let user_name = Random.cname()  // 评论用户
        let add_time = Random.datetime() // 评论时间
        let content = Random.csentence(10, 30) // 评论内容
        let one_comment = { user_name: user_name, add_time: add_time, content: content}
        comments.push(one_comment)
    }

    return {
        message: comments
    }

}

// 模拟处理评论数据
const deal_comment = function() {
    let code = 0
    let deal_message = "评论成功"

    return {
        message: { code: code, deal_message: deal_message }
    }
}



// 定义API

// 首页轮播图: '/home/getlunbotu' 
Mock.mock("/home/getlunbotu", "get", lubotuList)

// 新闻列表: '/home/newslist/getnewslist'
Mock.mock("/home/newslist/getnewslist", "get", newslist)

//  新闻详情: '/home/newsinfo/id'
Mock.mock("/home/newsinfo/1", "get", newsinfo)
Mock.mock("/home/newsinfo/2", "get", newsinfo)
Mock.mock("/home/newsinfo/3", "get", newsinfo)
Mock.mock("/home/newsinfo/4", "get", newsinfo)
Mock.mock("/home/newsinfo/5", "get", newsinfo)
Mock.mock("/home/newsinfo/6", "get", newsinfo)
Mock.mock("/home/newsinfo/7", "get", newsinfo)
Mock.mock("/home/newsinfo/8", "get", newsinfo)
Mock.mock("/home/newsinfo/9", "get", newsinfo)
Mock.mock("/home/newsinfo/10", "get", newsinfo)

// 默认返回第一页数据(id为新闻详情的id)
// 评论数据：'/home/newsinfo/getcomments/id?pageindex=1'
Mock.mock('/home/newsinfo/getcomments/1?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/2?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/3?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/4?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/5?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/6?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/7?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/8?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/9?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/10?pageindex=1', "get", commentslist)

// 加载更多页的数据(评论总共4页)
// 第1条新闻
Mock.mock('/home/newsinfo/getcomments/1?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/1?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/1?pageindex=4', "get", commentslist)
// 第2条新闻
Mock.mock('/home/newsinfo/getcomments/2?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/2?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/2?pageindex=4', "get", commentslist)
// 第3条新闻
Mock.mock('/home/newsinfo/getcomments/3?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/3?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/3?pageindex=4', "get", commentslist)
// 第4条新闻
Mock.mock('/home/newsinfo/getcomments/4?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/4?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/4?pageindex=4', "get", commentslist)
// 第5条新闻
Mock.mock('/home/newsinfo/getcomments/5?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/5?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/5?pageindex=4', "get", commentslist)
// 第6条新闻
Mock.mock('/home/newsinfo/getcomments/6?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/6?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/6?pageindex=4', "get", commentslist)
// 第7条新闻
Mock.mock('/home/newsinfo/getcomments/7?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/7?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/7?pageindex=4', "get", commentslist)
// 第8条新闻
Mock.mock('/home/newsinfo/getcomments/8?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/8?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/8?pageindex=4', "get", commentslist)
// 第9条新闻
Mock.mock('/home/newsinfo/getcomments/9?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/9?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/9?pageindex=4', "get", commentslist)
// 第10条新闻
Mock.mock('/home/newsinfo/getcomments/10?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/10?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/10?pageindex=4', "get", commentslist)

// 处理评论数据：'/home/newsinfo/postcomments/id'
Mock.mock('/home/newsinfo/postcomments/1', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/2', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/3', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/4', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/5', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/6', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/7', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/8', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/9', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/10', "post", deal_comment)



