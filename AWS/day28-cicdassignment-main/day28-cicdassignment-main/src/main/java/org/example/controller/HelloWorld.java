package org.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class HelloWorld {
    @GetMapping("/home")
    public String message(){
        return "Hello World";
    }

    @GetMapping("/view")
    public String message1(){
        return "Welcome to Sample Spring Boot Application After a new Makeover with new commit";
    }

    @GetMapping("/viewAll")
    public String message2(){
        return "Welcome to HelloWorld Spring Boot Application";
    }
}
