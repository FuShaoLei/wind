<template>
    <div>
        <router-link :to="{name: 'Post', params: {blogId: blog.id}}" v-for="blog in blogs">
            <el-card shadow="always">{{ blog.title }}</el-card>
        </router-link>
    </div>
</template>
<script>
export default {
    created(){
        this.getBlogList();
    },
    data(){
        return {
            blogs: {}
        }
    },
    methods:{
        test:async function(){
                const {data:res} = await this.$http.get("test");
                console.log(res);
        },
        getBlogList:async function(){
            const {data:re} = await this.$http.get("blog");
            this.blogs = re;
        }
    }
}
</script>
<style lang="stylus" scoped>
.el-card
  margin-top 20px
  width 700px
</style>