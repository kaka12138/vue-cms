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
      
    },

    // 在购物车页面更新商品的数量
    updateGoodsInfo(state, goodsinfo) {
        state.cart.some(item => {
            if(item.id == goodsinfo.id) {
              item.count = parseInt(goodsinfo.count)
              return true
            }
        })
        // 更新完毕, 将cart中的数据存储到本地的localStorge
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // 根据id删除购物车的一项数据
    removeFormCart(state, id){
        state.cart.some( (item, i) => {
            if(item.id == id) {
               state.cart.splice(i, 1)
               return true
            }
        })

        // 删除完毕, 将cart中的数据存储到本地的localStorge
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // 更新商品是否选中的状态
    updateSelctedStatus(state, goodsinfo){
        state.cart.some( item => {
            if(item.id == goodsinfo.id) {
                item.selected = goodsinfo.selected;
                return true
            }
        })

        // 状态更新完毕, 将cart中的数据存储到本地的localStorge
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },

   
  },
  getters: {
      // 获取购物车中的count总数
      getAllCount(state) {
          let count = 0;
          state.cart.forEach(item => {
            count += item.count;
          })
          return count;
      },
      // 获取每间商品对应的count数量： {id1: count1, id2: count2 ....}
      getGoodsCount(state) {
          let counts = {}
          state.cart.forEach(item => {
              counts[item.id] = item.count
          })
          return counts
      },
      // 获取商品的是否选中状态
      getGoodsSelected(state) {
          let status = {}
          state.cart.forEach(item => {
              status[item.id] = item.selected;
          });
          return status          
      },
       // 计算出选中商品的数量和总价
      getGoodsCountandTotal(state) {
        let countandtotal = {
            count: 0,
            total: 0
        }
        state.cart.forEach( item => {
          if(item.selected) {
            countandtotal.count += item.count
            countandtotal.total += item.price * item.count
          }
        });
        return countandtotal
    }
  },
  actions: {

  }
})

export default store;
