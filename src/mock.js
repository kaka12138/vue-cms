// 引入Mock库
const Mock = require("mockjs")

// Random对象
const Random = Mock.Random;

// 轮播图
const lubotuList = function() {
    let img1 = { "url": Random.image("200x150", "#50B347", "#fff", 'img1') };
    let img2 = { "url": Random.image("200x150", "#4A7BF7", "#fff", 'img2') };
    let img3 = {"url": Random.image("200x150", "#894FC4", "#fff", 'img3') };
    return {
        message: [img1, img2, img3]
    }
}




// 定义API

// 首页轮播图: ' /home/getlunbotu' 
Mock.mock("/home/getlunbotu", "get", lubotuList)

