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

