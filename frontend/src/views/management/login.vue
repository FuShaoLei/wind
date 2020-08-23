<template>
    <div class="login-outer">
        <div class="login-inner">
            <el-form :model="loginForm">
              <el-form-item >
                  <el-input v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-input v-model="loginForm.password"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="login">Login</el-button>
              </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loginForm: {
                username: "root",
                password: "123456"
            }
        }
    },
    methods: {
        login:async function(){
            const{data:re} = await this.$http.post("login",this.loginForm);
            if(re == "ok"){
                this.$message.success("登录成功(´▽`ʃ♡ƪ)");
                this.$router.push({name: 'Home'});
            }else{
                this.$message.error("登录失败(；′⌒`)");
            }
        }
    }
}
</script>