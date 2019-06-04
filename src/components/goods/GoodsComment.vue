<template>
    <div>
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
// 导入评论子组件
import comment from '../subcomponets/Comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    components: {
        "cmt-box": comment
    }
}
</script>

<style lang="scss" scoped>

</style>
