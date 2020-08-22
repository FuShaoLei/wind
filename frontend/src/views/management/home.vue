<template>
    <el-container class="backhome-outer">
        <el-aside width="200px" >
            <el-menu
            default-active="1">
                <router-link :to="{name: 'Posts'} ">
                <el-menu-item index="1">
                    <i class="el-icon-s-management"></i>
                    文章管理
                </el-menu-item>
                </router-link>
                <router-link :to="{path: '/'} ">
                <el-menu-item index="2">
                    <i class="el-icon-caret-left"></i>
                    回到博客页
                </el-menu-item>
                </router-link>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
export default {
    methods:{
        gotoedit:function(){
            this.$router.push({path: "./edit"});
        }
    }
}
</script>
<style lang="stylus" scoped>
.backhome-outer
    height 100%
.el-aside
    color: #333;
.el-main
    color: #333;

</style>