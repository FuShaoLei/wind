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
        // <div>
        //   <el-card shadow="always">飞机场的十点半<el-button type="success" icon="el-icon-arrow-right" circle></el-button></el-card>
        //   <el-card shadow="always">飞机场的十点半<el-button type="success" icon="el-icon-arrow-right" circle></el-button></el-card>
        // </div>

    //         <div class="post-outer">
    //     <div class="post-inner">
    //         <div v-for="blog in blogs" class="index-post-item">
    //             <div class="index-post-name"><router-link :to="{name: 'Post', params: {blogId: blog.id}}"> {{ blog.title }} </router-link>  </div>
    //         </div>
    //     </div>
    // </div>
</script>
<style lang="stylus" scoped>
.el-card
  margin-top 20px
  width 700px
  .el-button
    margin-left 100px
</style>