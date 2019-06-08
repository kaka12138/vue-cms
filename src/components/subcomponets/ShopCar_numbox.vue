<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style="height: 25px;">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" readonly/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
    mounted() {
        // 初始化数字选择框
        mui('.mui-numbox').numbox()
    },
    methods: {
        // 商品数量改变, 同步到store
        countChanged() {
            this.$store.commit("updateGoodsInfo", {
                id: this.goodsid,
                count: this.$refs.numbox.value
            });
        }
    },
    props: [
        "initcount",  // 父组件向子组件传值：初始化子组件中的numbox的值
        "goodsid",  // 通过store, 用于在购物车页面更新商品数量 
    ]
}
</script>

<style lang="scss" scoped>

</style>
