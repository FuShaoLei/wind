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
                  <el-button @click="createBlog">立即创建</el-button>
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
                title: "",
                content: ""
            }
        }
    },
    methods:{
        createBlog:async function(){
            const{data:re} = await this.$http.post("blog/edit",this.blogForm);
            if(re == "save"){
                this.$message.success("创建博客成功\(0^◇^0)/");
            }else {
                this.$message.error("创建博客失败(ノ｀Д)ノ");
            }
        }
    }
}
</script>