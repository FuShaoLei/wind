<template>
    <div class="outer">
        <div class="inner">
            <div class="header">
              <div class="logo">
                Sorryfu
              </div>
              <div class="menu">
                <div><router-link to='/'>Blog</router-link></div>
                <div><router-link to='/login'>Admin</router-link></div>
              </div>
            </div>
            <div class="body">
              <router-view></router-view>
            </div>
            <div class="footer">
              Code by <a href="https://github.com/FuShaoLei">Sorryfu</a>
            </div>
        </div>
    </div>
</template>