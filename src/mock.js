// 引入Mock库
const Mock = require("mockjs")

// Random对象
const Random = Mock.Random;

// 轮播图数据
const lubotuList = function() {
    let img1 = { "url": "https://images.pexels.com/photos/1172851/pexels-photo-1172851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };
    let img2 = { "url": "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };
    let img3 = {"url": "https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };
    return {
        message: [img1, img2, img3]
    }
}

//  新闻列表数据
const newslist = function() {
    var news = []

    for (let i=0; i<10; i++) {
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

    for(let i=0; i<10; i++){
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


// 图片分类数据
const imgcategory = function() {
    let imgcategorylist = []
    let category1 = { id: 0, title: "全部"}
    let category2 = { id: 1, title: "体育运动" }
    let category3 = { id: 2, title: "自然风景"}
    let category4 = { id: 3, title: "家具生活"}
    let category5 = { id: 4, title: "城市风光"}
    let category6 = { id: 5, title: "科技生活"}
    imgcategorylist.push(category1, category2, category3, category4, category5, category6)

    return {
        message: imgcategorylist
    }
}

// 不同分类下的图片列表
const imglist = function(category) {
    let imagelist = []
    // 所有图片
    let all_url = [
        "https://images.pexels.com/photos/1637731/pexels-photo-1637731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1391374/pexels-photo-1391374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ]
    // 体育运动图片
    let sports_url = [
        "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1127120/pexels-photo-1127120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1637731/pexels-photo-1637731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/386024/pexels-photo-386024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1405355/pexels-photo-1405355.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ]
    // 自然风景图片
    let naturl_url = [
        "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/92933/pexels-photo-92933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ]
    // 家具生活图片
    let family_url = [
        "https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2347721/pexels-photo-2347721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2343466/pexels-photo-2343466.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ]
    // 城市风光图片
    let city_url = [
        "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1095901/pexels-photo-1095901.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/128367/pexels-photo-128367.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ]
    // 科技生活图片
    let technology_url = [
        "https://images.pexels.com/photos/1036841/pexels-photo-1036841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1391374/pexels-photo-1391374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ]
    if(category == "all"){
        for(let i=0; i<5;i++){
            let id= i  // 图片id
            let title = Random.ctitle()  // 图片标题
            let img_url = all_url.slice(i, i+1)[0]  // 图片url
            let abstract = Random.cparagraph()  // 图片摘要
            let one_info = { id: id, title: title, img_url: img_url, abstract: abstract}
            imagelist.push(one_info)
        }
    }else if(category == "sports"){
        for(let i=0; i<5;i++){
            let id= i  // 图片id
            let title = Random.ctitle()  // 图片标题
            let img_url = sports_url.slice(i, i+1)[0]  // 图片url
            let abstract = Random.cparagraph()  // 图片摘要
            let one_info = { id: id, title: title, img_url: img_url, abstract: abstract}
            imagelist.push(one_info)
        }
    }else if(category == "naturl"){
        for(let i=0; i<5;i++){
            let id= i  // 图片id
            let title = Random.ctitle()  // 图片标题
            let img_url = naturl_url.slice(i, i+1)[0]  // 图片url
            let abstract = Random.cparagraph()  // 图片摘要
            let one_info = { id: id, title: title, img_url: img_url, abstract: abstract}
            imagelist.push(one_info)
        }
    }else if(category == "family"){
        for(let i=0; i<5;i++){
            let id= i  // 图片id
            let title = Random.ctitle()  // 图片标题
            let img_url = family_url.slice(i, i+1)[0]  // 图片url
            let abstract = Random.cparagraph()  // 图片摘要
            let one_info = { id: id, title: title, img_url: img_url, abstract: abstract}
            imagelist.push(one_info)
        }
    }else if(category == "city"){
        for(let i=0; i<5;i++){
            let id= i  // 图片id
            let title = Random.ctitle()  // 图片标题
            let img_url = city_url.slice(i, i+1)[0]  // 图片url
            let abstract = Random.cparagraph()  // 图片摘要
            let one_info = { id: id, title: title, img_url: img_url, abstract: abstract}
            imagelist.push(one_info)
        }
    }else if(category == "technology"){
        for(let i=0; i<5;i++){
            let id= i  // 图片id
            let title = Random.ctitle()  // 图片标题
            let img_url = technology_url.slice(i, i+1)[0]  // 图片url
            let abstract = Random.cparagraph()  // 图片摘要
            let one_info = { id: id, title: title, img_url: img_url, abstract: abstract}
            imagelist.push(one_info)
        }
    }else{
        // 输入的category有误，返回空数组
        imagelist = []
    }

    return {
        message: imagelist
    }
}

// 图片详情数据
const imginfo = function(){
    let title = Random.ctitle()  // 详情页标题
    let click = Mock.mock({
        "num|1-100": 100
    }).num // 图片点击次数
    let add_time = Random.date()  // 图片发表时间
    let content = Random.cparagraph()  // 图片描述内容

    return {
        message: {
            title: title,
            click: click,
            add_time: add_time,
            content: content
        }
    }
}


// 图片详情页对应的缩略图
const thumbnail = function(){
    let thumbnaillist = []
    let img1 = { src: "https://images.pexels.com/photos/1028725/pexels-photo-1028725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", msrc: "https://images.pexels.com/photos/1028725/pexels-photo-1028725.jpeg?auto=compress&cs=tinysrgb&dpr=0.2&w=500" }
    let img2 = {src: "https://images.pexels.com/photos/348520/pexels-photo-348520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", msrc: "https://images.pexels.com/photos/348520/pexels-photo-348520.jpeg?auto=compress&cs=tinysrgb&dpr=0.2&w=500"}
    let img3 = {src: "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", msrc: "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&dpr=0.2&w=500" }
    let img4 = {src: "https://images.pexels.com/photos/459303/pexels-photo-459303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", msrc: "https://images.pexels.com/photos/459303/pexels-photo-459303.jpeg?auto=compress&cs=tinysrgb&dpr=0.2&w=500" }
    let img5 = {src: "https://images.pexels.com/photos/414716/pexels-photo-414716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", msrc: "https://images.pexels.com/photos/414716/pexels-photo-414716.jpeg?auto=compress&cs=tinysrgb&dpr=0.2&w=500" }

    thumbnaillist.push(img1, img2, img3, img4, img5)

    return {
        message: thumbnaillist
    }
}

// 商品列表数据
const goodslist = function(pageindex) {
    let GoodsList = []
    let all_img_url = [
        "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/39559/ipad-mockup-apple-business-39559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/416343/pexels-photo-416343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2351844/pexels-photo-2351844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ]
    for(let i=0; i<10; i++){
        let id = i;
        let title = Random.ctitle();  // 商品名称 
        let add_time = Random.date();
        let abstract = Random.csentence(10, 15); // 商品摘要
        let img_url = all_img_url.slice(i, i+1);  // 商品图片链接
        let old_price = Mock.mock({
            "num|2990-3999": 2999
        }).num;  // 商品的现在售价
        let now_price = Mock.mock({
            "num|2000-2999":2000
        }).num;  // 商品的过去售价
        let stock_quantity = Mock.mock({
            "num|1-60":1
        }).num;  // 商品的库存

        let one_info = {id: id, title: title, add_time: add_time, abstract: abstract, now_price: now_price, img_url:img_url, old_price: old_price, stock_quantity: stock_quantity};
        GoodsList.push(one_info)
    }

    if(pageindex == 1) {
        return {
            message: GoodsList.slice(0,6)
        }
    }else if(pageindex == 2) {
        return {
            message: GoodsList.slice()
        }
    }else{
        // pageindex输入有误
        return {
            message: []
        }
    }
    
}

// 商品页轮播图数据
const goodsinfolunbotu = function() {
    let img1 = "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    let img2 = "https://images.pexels.com/photos/39559/ipad-mockup-apple-business-39559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    let img3 = "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    return {
        message: [
            { url: img1 },
            { url: img2 },
            { url: img3 }
        ]
    }
}



// 定义API

// 首页轮播图: '/home/getlunbotu' 
Mock.mock("/home/getlunbotu", "get", lubotuList)

// 新闻列表: '/home/newslist/getnewslist'
Mock.mock("/home/newslist/getnewslist", "get", newslist)

//  新闻详情: '/home/newsinfo/id'
Mock.mock("/home/newsinfo/0", "get", newsinfo)
Mock.mock("/home/newsinfo/1", "get", newsinfo)
Mock.mock("/home/newsinfo/2", "get", newsinfo)
Mock.mock("/home/newsinfo/3", "get", newsinfo)
Mock.mock("/home/newsinfo/4", "get", newsinfo)
Mock.mock("/home/newsinfo/5", "get", newsinfo)
Mock.mock("/home/newsinfo/6", "get", newsinfo)
Mock.mock("/home/newsinfo/7", "get", newsinfo)
Mock.mock("/home/newsinfo/8", "get", newsinfo)
Mock.mock("/home/newsinfo/9", "get", newsinfo)

// 默认返回第一页数据(id为新闻详情的id)
// 评论数据：'/home/newsinfo/getcomments/id?pageindex=1'
Mock.mock('/home/newsinfo/getcomments/0?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/1?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/2?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/3?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/4?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/5?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/6?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/7?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/8?pageindex=1', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/9?pageindex=1', "get", commentslist)

// 加载更多页的数据(评论总共4页)
// 第1条新闻
Mock.mock('/home/newsinfo/getcomments/0?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/0?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/0?pageindex=4', "get", commentslist)
// 第2条新闻
Mock.mock('/home/newsinfo/getcomments/1?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/1?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/1?pageindex=4', "get", commentslist)
// 第3条新闻
Mock.mock('/home/newsinfo/getcomments/2?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/2?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/2?pageindex=4', "get", commentslist)
// 第4条新闻
Mock.mock('/home/newsinfo/getcomments/3?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/3?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/3?pageindex=4', "get", commentslist)
// 第5条新闻
Mock.mock('/home/newsinfo/getcomments/4?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/4?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/4?pageindex=4', "get", commentslist)
// 第6条新闻
Mock.mock('/home/newsinfo/getcomments/5?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/5?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/5?pageindex=4', "get", commentslist)
// 第7条新闻
Mock.mock('/home/newsinfo/getcomments/6?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/6?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/6?pageindex=4', "get", commentslist)
// 第8条新闻
Mock.mock('/home/newsinfo/getcomments/7?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/7?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/7?pageindex=4', "get", commentslist)
// 第9条新闻
Mock.mock('/home/newsinfo/getcomments/8?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/8?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/8?pageindex=4', "get", commentslist)
// 第10条新闻
Mock.mock('/home/newsinfo/getcomments/9?pageindex=2', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/9?pageindex=3', "get", commentslist)
Mock.mock('/home/newsinfo/getcomments/9?pageindex=4', "get", commentslist)

// 处理评论数据：'/home/newsinfo/postcomments/id'
Mock.mock('/home/newsinfo/postcomments/0', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/1', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/2', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/3', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/4', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/5', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/6', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/7', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/8', "post", deal_comment)
Mock.mock('/home/newsinfo/postcomments/9', "post", deal_comment)

// 图片分类数据 '/home/photolist/getimgcategory'
Mock.mock('/home/photolist/getimgcategory', "get", imgcategory)

// 图片分类下的所有图片："/home/photolist/getimages/category_id"

// all分类下的所有图片
Mock.mock('/home/photolist/getimages/0', "get", imglist('all'))
// sports分类下的所有图片
Mock.mock('/home/photolist/getimages/1', "get", imglist('sports'))
// naturl分类下的所有图片
Mock.mock('/home/photolist/getimages/2', "get", imglist('naturl'))
// family分类下的所有图片
Mock.mock('/home/photolist/getimages/3', "get", imglist('family'))
// city分类下的所有图片
Mock.mock('/home/photolist/getimages/4', "get", imglist('city'))
// technology分类下的所有图片
Mock.mock('/home/photolist/getimages/5', "get", imglist('technology'))

// 图片详情'/home/photoinfo/getimginfo/img_id'
Mock.mock('/home/photoinfo/getimginfo/0', "get", imginfo)
Mock.mock('/home/photoinfo/getimginfo/1', "get", imginfo)
Mock.mock('/home/photoinfo/getimginfo/2', "get", imginfo)
Mock.mock('/home/photoinfo/getimginfo/3', "get", imginfo)
Mock.mock('/home/photoinfo/getimginfo/4', "get", imginfo)

// 图片详情页对应的缩略图 '/home/photoiinfo/getthumbnail/img_id'
Mock.mock('/home/photoiinfo/getthumbnail/0', "get", thumbnail)
Mock.mock('/home/photoiinfo/getthumbnail/1', "get", thumbnail)
Mock.mock('/home/photoiinfo/getthumbnail/2', "get", thumbnail)
Mock.mock('/home/photoiinfo/getthumbnail/3', "get", thumbnail)
Mock.mock('/home/photoiinfo/getthumbnail/4', "get", thumbnail)


// 商品列表数据(返回第一页的数据) '/home/goodslist/getgoodslist?pageindex=1'
Mock.mock('/home/goodslist/getgoodslist?pageindex=1', "get", goodslist(1))

// 商品列表数据(返回第1，2页的数据) '/home/goodslist/getgoodslist?pageindex=2'
Mock.mock('/home/goodslist/getgoodslist?pageindex=2', "get", goodslist(2))

// 商品页轮播图数据 '/home/goodsinfo/getlunbotu/goods_id'
Mock.mock('/home/goodsinfo/getlunbotu/0', "get", goodsinfolunbotu)
Mock.mock('/home/goodsinfo/getlunbotu/1', "get", goodsinfolunbotu)
Mock.mock('/home/goodsinfo/getlunbotu/2', "get", goodsinfolunbotu)
Mock.mock('/home/goodsinfo/getlunbotu/3', "get", goodsinfolunbotu)
Mock.mock('/home/goodsinfo/getlunbotu/4', "get", goodsinfolunbotu)
Mock.mock('/home/goodsinfo/getlunbotu/5', "get", goodsinfolunbotu)
Mock.mock('/home/goodsinfo/getlunbotu/6', "get", goodsinfolunbotu)
Mock.mock('/home/goodsinfo/getlunbotu/7', "get", goodsinfolunbotu)
Mock.mock('/home/goodsinfo/getlunbotu/8', "get", goodsinfolunbotu)
Mock.mock('/home/goodsinfo/getlunbotu/9', "get", goodsinfolunbotu)



