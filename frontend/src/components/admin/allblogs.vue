<template>
    <el-table 
    :data="blogs"
    style="100%">
      <el-table-column
      prop="id"
      label="ID">
      </el-table-column>
      <el-table-column
      prop="title"
      label="Title">
      </el-table-column>
      <el-table-column>
          <template slot="header" slot-scope="scope">
              <router-link :to="{path: './edit'}"><el-button type="success" round>Create</el-button></router-link>
          </template>
          <template slot-scope="scope">
              <router-link :to="{path: './edit/'+scope.row.id}"><el-button type="primary"  icon="el-icon-edit" circle @click="handleEdit(scope.row.id)"></el-button></router-link>
              <el-button type="danger"  icon="el-icon-delete" circle @click="handleDelete(scope.row.id)" class="m__left"></el-button>
          </template>
      </el-table-column>
    </el-table>
</template>
<script>
export default {
    created(){
        this.getBlogList();
    },
    data(){
        return {
            blogs: []
        }
    },
    methods:{
        getBlogList:async function(){
            const {data:re} = await this.$http.get("blog");
            this.blogs = re;
        },
        handleEdit(id){
            console.log(id);
        },
        handleDelete(id){
            this.$confirm('确定删除id为'+id+'的文章吗w(ﾟДﾟ)w','提示',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                const {data:res} = await this.$http.get("delete/"+id);
                if(res == "done"){
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    }); 
                    this.$router.go(0);
                }
            });
        }
    }
}
</script>
<style lang="stylus" scoped>
.m__left
    margin-left 16px
</style>