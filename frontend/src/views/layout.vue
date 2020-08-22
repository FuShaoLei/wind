<template>
    <el-container>
      <el-header>
        <el-menu default-active="1" mode="horizontal">
          <el-menu-item index="1"><router-link to='/'>博客</router-link></el-menu-item>
         <el-menu-item index="2"> <router-link :to="{name: 'Login'}">管理</router-link></el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
</template>
<script>
export default {
    //   <div class="outer">
    //     <div class="inner">
    //         <div class="header">
    //           <div class="logo">
    //             Sorryfu
    //           </div>
    //           <div class="menu">
    //             <div><router-link to='/'>Blog</router-link></div>
    //             <div><router-link :to="{name: 'Login'}">Login</router-link></div>
    //           </div>
    //         </div>
    //         <div class="body">
    //           <router-view></router-view>
    //         </div>
    //         <div class="footer">
    //           Code by <a href="https://github.com/FuShaoLei">Sorryfu</a>
    //         </div>
    //     </div>
    // </div>
}
</script>
<style lang="stylus" scoped>
.el-header, .el-footer
  display flex
  justify-content center
  color: #333;
  text-align: center;
  line-height: 60px;
.el-menu
  width 900px
.el-main
  color: #333;
  display flex
  justify-content center

</style>