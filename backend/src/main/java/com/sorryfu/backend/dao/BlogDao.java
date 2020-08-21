package com.sorryfu.backend.dao;

import com.sorryfu.backend.entity.Blog;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogDao {
    //获取全部blog
    public List<Blog> getBlog();
    //根据id获取blog
    public Blog getBlogById(int id);
    //创建博客
    public int saveBlog(Blog blog);

}
