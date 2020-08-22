<template>
    <div class="edit-outer">
        <div class="edit-inner">
            <el-form :model="blogForm">
              <el-form-item>
                  <el-input v-model="blogForm.title" placeholder="请输入标题"></el-input>
              </el-form-item>
              <el-form-item >
                  <mavon-editor v-model="blogForm.content"></mavon-editor>
              </el-form-item>
              <el-form-item >
                  <el-button @click="createBlog">Save</el-button>
              </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            blogForm: {
                id: 0,
                title: "",
                content: ""
            }
        }
    },
    created(){
        if(this.$route.params.blogId!==undefined){
            const blogId = this.$route.params.blogId;
            this.blogForm.id=blogId;
            console.log("准备修改的博客id是"+blogId);
            this.getBlog();
        }
    },
    methods:{
        getBlog:async function(){
            // console.log("经由create获得的博客id是 "+this.blog.id);
            const {data:res} = await this.$http.get("blog/"+this.blogForm.id);
            this.blogForm = res;

        },
        createBlog:async function(){
            const{data:re} = await this.$http.post("blog/edit",this.blogForm);
            if(re == "save"){
                this.$message.success("创建/更新博客成功\(0^◇^0)/");
                this.$router.go(-1);
            }else {
                this.$message.error("创建/更新博客失败(ノ｀Д)ノ");
            }
        }
    }
}
</script>