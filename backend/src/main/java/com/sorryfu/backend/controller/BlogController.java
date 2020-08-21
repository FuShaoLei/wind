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

    /**
     * 这里要是实现的有两个功能
     * 1. 当id不为0的时候，说明是要update的
     * 2. 当id为0的时候，说明是要insert的
     * @param blog
     * @return
     */
    @RequestMapping("/blog/edit")
    public String saveBlog(@RequestBody Blog blog){
        String flag = "error";
        if(blog.getId()==0){
            System.out.println("holy fuck 这个是要新增的博客");
            System.out.println("新增博客的内容是 "+blog.toString());
            if(blogDao.saveBlog(blog) == 1){
                flag = "save";
            }
        }else if(blog.getId()!=0){
            System.out.println("holy shit 这个是要修改的博客");
            System.out.println("要修改博客的内容是 "+blog.toString());
            if(blogDao.saveBlog(blog) == 1){
                flag = "save";
            }
        }
        return flag;
    }

    @GetMapping("/delete/{id}")
    public String deleteBlog(@PathVariable(name = "id")int id){
        String flag = "error";
        System.out.println("准备要删除的id是 "+id);
        if(blogDao.deleteBlog(id)==1){
            flag = "done";
        }
        return flag;
    }
}
