package com.sorryfu.backend.controller;

import com.alibaba.fastjson.JSON;
import com.sorryfu.backend.dao.BlogDao;
import com.sorryfu.backend.entity.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BlogController {

    @Autowired
    private BlogDao blogDao;

    @RequestMapping("/blog")
    public String getBlogList(){
        List<Blog> blogList=blogDao.getBlog();
        String str=JSON.toJSONString(blogList);
        System.out.println("获取到的博客是 "+str);
        return str;
    }

    @GetMapping("/blog/{id}")
    public String getBlogById(@PathVariable(name = "id")int id){
        Blog blog=blogDao.getBlogById(id);
        String str=JSON.toJSONString(blog);
        System.out.println("id为"+id+" 的博客的数据是 "+str);
        return str;
    }

    @RequestMapping("/blog/edit")
    public String saveBlog(@RequestBody Blog blog){
        String flag = "error";
        System.out.println("获取到的博客内容是 "+blog.toString());
        if(blogDao.saveBlog(blog) == 1){
            flag = "save";
        }
        return flag;
    }
}
