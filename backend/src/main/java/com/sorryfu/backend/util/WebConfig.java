package com.sorryfu.backend.util;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")//访问的任何东西，都允许
                .allowedOrigins("HTTP://localhost:8080","null")//添加跨域的来源
                .allowedMethods("GET","POST","PUT","OPTIONS","DELETE")//允许跨域的方法
                .allowCredentials(true)//是否可携带信息
                .maxAge(3600);//最大响应时间
    }
}
