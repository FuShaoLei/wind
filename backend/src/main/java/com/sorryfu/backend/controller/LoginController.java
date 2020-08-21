package com.sorryfu.backend.controller;

import com.sorryfu.backend.dao.UserDao;
import com.sorryfu.backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    UserDao userDao;

    @RequestMapping("/login")
    public String login(@RequestBody User user){
        String flag = "error";
        User u=userDao.getUserByMessage(user.getUsername(),user.getPassword());
        if (u!=null){
            System.out.println("获取到的数据是 "+u);
            flag = "ok";
        }
        return flag;
    }
}
