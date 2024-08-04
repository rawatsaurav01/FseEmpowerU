package com.rds.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rds.user.entity.User;
import com.rds.user.service.UserService;

@RestController
public class UserController {
	
	@Autowired
    private UserService service;

	
	 @PostMapping("/register")
     public ResponseEntity<User>  registerUser(@RequestBody User newUser) {
		 return new ResponseEntity<>(service.registerUser(newUser), HttpStatus.CREATED);
   }


}
