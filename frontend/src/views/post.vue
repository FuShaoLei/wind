<template>
    <el-card shadow="always" class="m_post">
        <div class="post-title"> {{ blog.title }} </div>
        <div  class="markdown-body" v-html="blog.content" v-highlight></div>
    </el-card>
</template>
<script>
import 'github-markdown-css'

export default {
    data(){
        return {
            blog:{
                id: "",
                title: "",
                content: ""
            },
        }
    },
    created() {
        const blogId = this.$route.params.blogId;
        // console.log("获取到的博客id是 "+blogId);
        this.blog.id=blogId;
        this.getBlog();
        
    },
    methods:{
        getBlog:async function(){
            // console.log("经由create获得的博客id是 "+this.blog.id);
            const {data:res} = await this.$http.get("blog/"+this.blog.id);
            this.blog = res;
            // console.log("输出"+this.blog.id);
            // console.log("输出"+this.blog.title);
            // console.log("输出"+this.blog.content);

            //将md格式的数据转换成html的格式
            var MarkdownIt = require("markdown-it");
            var md = new MarkdownIt();
            var result = md.render(this.blog.content);
            this.blog.content = result;
        }
    }
}
</script>
<style lang="stylus" scoped>
.m_post
    width 700px
</style>