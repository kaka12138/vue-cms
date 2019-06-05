import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 刷新页面或重新进入页面时，读取localStorge中的数据，渲染到页面
let cart = JSON.parse(localStorage.getItem('cart') || '[]');


var store = new Vuex.Store({
  state: {
    cart: cart  // 存放购物车中的商品信息 {id：商品id,count: 购买该商品的数量, price：商品单价, selected:商品是否被选中 }
  },
  mutations: {
    // 商品信息加入购物车

    addToCart(state, goodsinfo) {
      // 商品是否存在于购物车
      let flag = false

      // 如果商品已存在，则只更新商品数量
        state.cart.some(item => {
          if(item.id == goodsinfo.id) {
            item.count += parseInt(goodsinfo.count);
            flag = true
            return true
          }
        })

        // 商品不存在于购物车
        if(!flag) {
          state.cart.push(goodsinfo);
        }

        // 将cart中的数据存储到本地的localStorge
        localStorage.setItem("cart", JSON.stringify(state.cart));
      
    }
  },
  getters: {
      // 获取购物车中的count总数
      getAllCount(state) {
          let c = 0;
          state.cart.forEach(item => {
            c += item.count;
          })
          return c;
      }
  },
  actions: {

  }
})

export default store;
