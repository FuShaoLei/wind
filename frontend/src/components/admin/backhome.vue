<template>
    <div class="backhome-outer">
        <el-button @click="gotoedit">创建博客</el-button>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods:{
        gotoedit:function(){
            this.$router.push({path: "backhome/edit"});
        }
    }
}
</script>