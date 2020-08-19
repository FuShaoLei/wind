<template>
<div class="layout-outer">
    <div class="layout-inner">
        <div class="layout-header">
            <div class="logo">
                Sorryfu
            </div>
            <div class="layout-menu">
                <div><router-link to='/'>Blog</router-link></div>
                <div><router-link to='/about'>About</router-link></div>
                <div><a href="#">Management</a></div>
            </div>
        </div>
        <div class="layout-main">
            <router-view></router-view>
        </div>
        <div class="layout-footer">
            Code by <a href="https://github.com/FuShaoLei">Sorryfu</a>
        </div>
    </div>
</div>
</template>

<style lang="stylus" scoped>
//可复用属性
//color
$color-theme = #333
$color-secondary = #DEE1E6
//字体
@font-face {
    font-family: Gothic;
    src: url(https://cdn.jsdelivr.net/gh/fushaolei/cdn-white@1.0/font/GOTHIC.TTF);
}
//整体布局样式
html
    font-size 12px
.layout-outer
    display flex
    justify-content center
.layout-inner
    width 1000px
    height 1000px
    font-family: Gothic
.layout-header, .layout-footer
    line-height: 60px
// header
.layout-header
    border-bottom 1px solid $color-secondary
    display flex
    justify-content space-between
    a
        color $color-secondary
        text-decoration none
        transition all .3s
        &:hover
            color $color-theme
.logo
    font-size 1.7rem
.layout-menu
    display flex
    div
        margin-left 30px
// footer
.layout-footer
    border-top 1px solid $color-secondary
</style>
