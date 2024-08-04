package com.rds.user.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rds.user.entity.User;
import com.rds.user.repository.UserRepository;
import com.rds.user.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;

	@Override
	public User registerUser(User newUser) {
		return repository.save(newUser);
	}

}
