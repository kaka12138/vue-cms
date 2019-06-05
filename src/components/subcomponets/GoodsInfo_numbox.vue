<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
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
        // 当文本框的数值发生变化时，就将值传递给父组件
        countChanged() {
            this.$emit('getcount', parseInt(this.$refs.numbox.value));
        }
    },
    props: [
        "max" // 接收父组件传递过来的最大库存量
    ],
    watch: {
        // 因为max是异步获取的，所以使用wacth操作，以便获取最终的max值
        'max': function(newVal, oldVal) {
            mui('.mui-numbox').numbox().setOption("max", newVal);
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>
