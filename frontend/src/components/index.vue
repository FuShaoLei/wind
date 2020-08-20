<template>
    <div class="post-outer">
        <div class="post-inner">
            <div v-for="blog in blogs" class="index-post-item">
                <div class="index-post-name"><router-link :to="{path:'/blog/'+blog.id}"> {{ blog.title }} </router-link>  </div>
            </div>
        </div>
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